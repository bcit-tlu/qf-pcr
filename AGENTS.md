# AGENTS.md

## Setup Commands

- Install dependencies: `npm install`
- Build for production: `CI=false npm run build`
- Start development server: `npm start`
- Run tests: `npm test`
- Helm lint: `helm lint charts/`
- Helm validate: `helm template test charts/ | kubeconform -strict -summary -schema-location default -ignore-missing-schemas`

## Code Style

- React with Bootstrap (react-bootstrap)
- Follow conventional commit format for PR titles
- License: MPL-2.0

## Project Structure

- `/src` — React source code and application logic
- `/public` — Static HTML entry point and assets
- `/charts` — Helm chart for Kubernetes deployment (flat layout)
- `/conf.d` — Nginx server configuration (health endpoints, caching, logging)
- `/.github/workflows/` — CI/CD pipelines

## Development Workflow

- Create feature branches from `main`
- Use pull requests for code review
- PR titles must follow conventional commit format (enforced by `pr-title-lint.yaml`)
- Squash commits before merging

## CI/CD

- CI uses shared `bcit-tlu/.github` OCI build reusable workflow
- `helm-lint` validates Helm charts on every push and PR
- `release-please` manages versioning via conventional commits (`release-type: "simple"`)
- Version is tracked in `.release-please-manifest.json` and `Chart.yaml` (`# x-release-please-version` annotations)
- Images are published to `ghcr.io/bcit-tlu/qf-pcr/qf-pcr`
- Charts are published to `oci://ghcr.io/bcit-tlu/qf-pcr/charts`
- `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` is set in all workflows

## Deployment

- Deployed to Kubernetes via Flux CD (see `bcit-tlu/flux-fleet`)
- Ingress: `qf-pcr.<CLUSTER_ENV>.ltc.bcit.ca`
- Static site served by nginx-unprivileged on port 8080
- Health endpoints: `/healthz`, `/healthz/startup`, `/healthz/ready`
