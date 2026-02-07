# ADR-002: Pre-commit Hooks Required

**Status**: Accepted
**Date**: 2026-02-01

## Context

Code quality requires enforcement before commits.

## Decision

All repositories MUST configure **pre-commit** hooks using Husky.

## Required Hooks

```json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

## Alternatives Considered

| Alternative | Pros | Cons | Decision |
|-------------|------|------|----------|
| pre-commit (Python) | Cross-platform | Different ecosystem | Rejected |
| CI-only | Simpler setup | Late feedback | Rejected |

## Consequences

- Husky + lint-staged installed
- Developers must run `npm install` after clone
