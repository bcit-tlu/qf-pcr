const path = require('path');

// CRA 4 uses webpack 4, which does not support the "exports" field in
// package.json. Several @opentelemetry packages rely on subpath exports,
// so we map them to their actual file paths via webpack resolve.alias.
module.exports = function override(config) {
  config.resolve = config.resolve || {};
  config.resolve.alias = {
    ...config.resolve.alias,

    // @opentelemetry/otlp-exporter-base subpath exports
    '@opentelemetry/otlp-exporter-base/browser-http': path.resolve(
      __dirname,
      'node_modules/@opentelemetry/otlp-exporter-base/build/src/index-browser-http.js',
    ),

    // @opentelemetry/browser-instrumentation subpath exports
    '@opentelemetry/browser-instrumentation/experimental/navigation-timing': path.resolve(
      __dirname,
      'node_modules/@opentelemetry/browser-instrumentation/dist/navigation-timing/index.js',
    ),
    '@opentelemetry/browser-instrumentation/experimental/resource-timing': path.resolve(
      __dirname,
      'node_modules/@opentelemetry/browser-instrumentation/dist/resource-timing/index.js',
    ),
    '@opentelemetry/browser-instrumentation/experimental/web-vitals': path.resolve(
      __dirname,
      'node_modules/@opentelemetry/browser-instrumentation/dist/web-vitals/index.js',
    ),
  };

  return config;
};
