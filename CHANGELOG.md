# Changelog

## [1.1.3](https://github.com/bcit-tlu/qf-pcr/compare/v1.1.2...v1.1.3) (2026-06-08)


### Bug Fixes

* retrigger pipeline for new package-lock.json ([3044f3d](https://github.com/bcit-tlu/qf-pcr/commit/3044f3d136819bd7634f0e75e3ed944003d4541a))
* version bump, align localhost UI with production after Bootstrap 4→5 migration ([31806a1](https://github.com/bcit-tlu/qf-pcr/commit/31806a16ec156ef2257963534412edf1391a19e0))

## [1.1.2](https://github.com/bcit-tlu/qf-pcr/compare/v1.1.1...v1.1.2) (2026-06-04)


### Bug Fixes

* add nginx configuration via ConfigMap and restore DNS resolver for OTel proxy ([f58bb4d](https://github.com/bcit-tlu/qf-pcr/commit/f58bb4daef4a240eb26901d05977c9e213984901))
* remove resolver directive from OTel logs proxy configuration ([c8c3116](https://github.com/bcit-tlu/qf-pcr/commit/c8c3116f6532765841057753d53e525352b38e6f))

## [1.1.1](https://github.com/bcit-tlu/qf-pcr/compare/v1.1.0...v1.1.1) (2026-06-04)


### Bug Fixes

* add OpenTelemetry collector endpoint configuration to Helm values ([64d1913](https://github.com/bcit-tlu/qf-pcr/commit/64d191348baf17197e589ac250bac4e4c37806c1))

## [1.1.0](https://github.com/bcit-tlu/qf-pcr/compare/v1.0.6...v1.1.0) (2026-06-04)


### Features

* add OpenTelemetry browser instrumentation and analytics ([0f50419](https://github.com/bcit-tlu/qf-pcr/commit/0f504196112c2f6264ee775e7a25f839ac9c6da7))
* add OpenTelemetry browser instrumentation and analytics ([4c7d968](https://github.com/bcit-tlu/qf-pcr/commit/4c7d968a797f737bb7c2228d22ef477004928822))

## [1.0.6](https://github.com/bcit-tlu/qf-pcr/compare/v1.0.5...v1.0.6) (2026-05-29)


### Bug Fixes

* change genotype table layout ([aa6ebbc](https://github.com/bcit-tlu/qf-pcr/commit/aa6ebbc6975f60064c3774f4f0c5693b9dbba8f1))

## [1.0.5](https://github.com/bcit-tlu/qf-pcr/compare/v1.0.4...v1.0.5) (2026-05-27)


### Bug Fixes

* replace gzip_static with runtime gzip compression ([9b923b4](https://github.com/bcit-tlu/qf-pcr/commit/9b923b427dc0596ee48c68823e5e0fd0edc1cf7a))
* set NODE_OPTIONS for legacy OpenSSL provider in build stage ([88e002e](https://github.com/bcit-tlu/qf-pcr/commit/88e002e4d4eccb0705d6b60be9fbfbee112e88e8))


### Performance Improvements

* add dev stage to Dockerfile to skip production build in dev compose ([d31c7e8](https://github.com/bcit-tlu/qf-pcr/commit/d31c7e83002d41983876c2c1642e8bc248a56e8f))

## Changelog
