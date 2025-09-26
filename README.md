
## Status Badges

- CI: ![CI](https://github.com/mnmahy34/CSP451-CheckPoint3/actions/workflows/ci.yml/badge.svg)
- Pages: ![Deploy](https://github.com/mnmahy34/CSP451-CheckPoint3/actions/workflows/pages.yml/badge.svg)
- Coverage: ![codecov](https://codecov.io/gh/mnmahy34/CSP451-CheckPoint3/branch/main/graph/badge.svg)


## Project Structure
- `src/` — HTML/CSS/JS scaffold
- `tests/` — Jest unit/integration tests (80%+ coverage threshold)
- `scripts/` — build and smoke test scripts
- `.github/workflows/` — CI, Pages deploy, scheduled audit
- `.github/actions/setup-project` — reusable composite action

## Week 3 Tasks
- Ensure CI passes: lint, test with coverage >= 80%, and build.
- Pages deployment on pushes to `main`.
- Scheduled dependency audit opens issue for high/critical vulnerabilities.

## Local Development
```bash
# Use Node 18
nvm use || nvm install

# Install dependencies
npm ci

# Run
npm start

# Lint & format
npm run lint
npm run format

# Test (with coverage)
npm test

# Build static site to dist/
npm run build
```

## GitHub Pages
- After first push to `main`, enable Pages: Settings > Pages > Source: GitHub Actions.
- The workflow in `.github/workflows/pages.yml` deploys `dist/`.

## Codecov
- Optional: Add repository to Codecov and set `CODECOV_TOKEN` secret if private.

## License
MIT

See WORKFLOWS.md for detailed CI/CD documentation.
