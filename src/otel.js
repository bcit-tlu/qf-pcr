import { logs, SeverityNumber } from '@opentelemetry/api-logs';
import {
  LoggerProvider,
  BatchLogRecordProcessor,
  SimpleLogRecordProcessor,
  ConsoleLogRecordExporter,
} from '@opentelemetry/sdk-logs';
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http';
import { resourceFromAttributes } from '@opentelemetry/resources';
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from '@opentelemetry/semantic-conventions';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { NavigationTimingInstrumentation } from '@opentelemetry/browser-instrumentation/experimental/navigation-timing';
import { ResourceTimingInstrumentation } from '@opentelemetry/browser-instrumentation/experimental/resource-timing';
import { WebVitalsInstrumentation } from '@opentelemetry/browser-instrumentation/experimental/web-vitals';

const VERSION = process.env.REACT_APP_VERSION || require('../package.json').version;

function getSessionId() {
  var id = sessionStorage.getItem('otel_session_id');
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem('otel_session_id', id);
  }
  return id;
}

function isProduction() {
  return (
    typeof window !== 'undefined' &&
    window.location.hostname.endsWith('.ltc.bcit.ca')
  );
}

function getPageType() {
  var hash = window.location.hash || '#/';
  var path = hash.replace(/^#\/?/, '').replace(/\/+$/, '');
  var segment = path.split('/').filter(Boolean)[0] || '';
  return segment || 'home';
}

var _loggerProvider = null;

function init() {
  var prod = isProduction();

  var resource = resourceFromAttributes({
    [ATTR_SERVICE_NAME]: 'qf-pcr',
    [ATTR_SERVICE_VERSION]: VERSION,
  });

  var logExporter = prod
    ? new OTLPLogExporter({ url: '/v1/logs' })
    : new ConsoleLogRecordExporter();

  var processor = prod
    ? new BatchLogRecordProcessor(logExporter)
    : new SimpleLogRecordProcessor(logExporter);

  _loggerProvider = new LoggerProvider({
    resource,
    processors: [processor],
  });

  logs.setGlobalLoggerProvider(_loggerProvider);

  registerInstrumentations({
    instrumentations: [
      new NavigationTimingInstrumentation(),
      new ResourceTimingInstrumentation(),
      new WebVitalsInstrumentation(),
    ],
  });

  var sessionId = getSessionId();
  var isNewSession = !sessionStorage.getItem('otel_session_started');
  var startTime = Date.now();

  var commonAttributes = {
    'user_agent': navigator.userAgent,
    'screen_resolution': window.screen.width + 'x' + window.screen.height,
    'referrer': document.referrer || '',
    'session.id': sessionId,
  };

  if (isNewSession) {
    sessionStorage.setItem('otel_session_started', '1');
    logEvent('session_start', {
      timestamp: new Date().toISOString(),
      ...commonAttributes,
    });
  }

  logEvent('page_view', {
    url: window.location.href,
    path: window.location.hash || '#/',
    page_type: getPageType(),
    ...commonAttributes,
  });

  // Track SPA hash-based route changes
  window.addEventListener('hashchange', function () {
    logEvent('page_view', {
      url: window.location.href,
      path: window.location.hash || '#/',
      page_type: getPageType(),
      ...commonAttributes,
    });
  });

  // Session heartbeat every 60s
  var heartbeatInterval = setInterval(function () {
    if (!document.hidden) {
      logEvent('session_heartbeat', {
        'duration_seconds': String(Math.round((Date.now() - startTime) / 1000)),
        ...commonAttributes,
      });
    }
  }, 60000);

  // Flush pending logs and emit session_end on tab close / navigate away
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      clearInterval(heartbeatInterval);
      logEvent('session_end', {
        'duration_seconds': String(Math.round((Date.now() - startTime) / 1000)),
        ...commonAttributes,
      });
      if (_loggerProvider) {
        _loggerProvider.forceFlush();
      }
    }
  });
}

function logEvent(eventName, attributes) {
  try {
    var logger = logs.getLogger('analytics');
    logger.emit({
      body: eventName,
      severityNumber: SeverityNumber.INFO,
      severityText: 'INFO',
      attributes: { 'event.name': eventName, ...attributes },
    });
  } catch (e) {
    if (!isProduction()) {
      console.debug('[otel-analytics] logEvent failed', e);
    }
  }
}

export function trackEvent(eventName, attributes) {
  var sessionId = getSessionId();
  logEvent(eventName, {
    'session.id': sessionId,
    'user_agent': navigator.userAgent,
    'screen_resolution': window.screen.width + 'x' + window.screen.height,
    'referrer': document.referrer || '',
    ...attributes,
  });
}

export function getPageTypeUtil() {
  return getPageType();
}

// Auto-init on import
init();
