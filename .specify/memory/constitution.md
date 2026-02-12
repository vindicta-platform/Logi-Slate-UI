# Logi-Slate UI Constitution

## Core Principles

### I. MCP-First Mandate
All filesystem, git, and external operations must use the provided MCP tools. Manually constructing commands is forbidden if an MCP tool exists.

### II. Spec-Driven Development (SDD)
No code is written without a prior specification (`spec.md`) and implementation plan (`plan.md`).

### III. Zero-Issue Stability
The `main` branch must always pass all linting and test suites. PRs that break CI will not be merged.

### IV. Node-Full Standards
- **Linting**: All code must pass `eslint` and `prettier` checks.
- **Testing**: Minimum 90% coverage with `vitest`.
- **UI Architecture**: Tailwind must be used for styling. Vanilla CSS only when explicitly requested.

### V. Domain Isolation
This domain (`Logi-Slate-UI`) must not import from other domain realms. Coordination happens via the swarm orchestrator only.
