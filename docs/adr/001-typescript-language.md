# ADR-001: TypeScript as Primary Language

**Status**: Accepted  
**Date**: 2026-02-01

## Context

This repository requires a programming language for implementation. It is a React-based frontend application.

## Decision

We adopt **TypeScript 5+** as the primary language.

## Rationale

- **UI Layer** — React/TypeScript is standard for web frontends
- **Type Safety** — Compile-time type checking
- **React Ecosystem** — Full community support

## Alternatives Considered

| Alternative | Pros | Cons | Decision |
|-------------|------|------|----------|
| Python | Platform consistency | Not suitable for web UI | Rejected |
| JavaScript | No build step | No type safety | Rejected |
| Rust/WASM | Performance | Overkill for this use case | Rejected |

## Consequences

- All source code uses TypeScript 5+
- Strict TypeScript config enabled
- ESLint + Prettier for linting/formatting
