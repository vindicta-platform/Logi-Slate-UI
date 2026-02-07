# Implementation Plan: Primordia Overlay

**Branch**: `008-primordia-overlay` | **Date**: 2026-02-06 | **Spec**: [spec.md](./spec.md)

## Summary

Real-time tactical AI evaluation overlay during game tracking. Displays position evaluation scores with breakdown tooltips and toggle controls.

## Technical Context

**Language/Version**: TypeScript (React 18.x)  
**Primary Dependencies**: React, Primordia-AI SDK  
**Storage**: N/A (real-time only)  
**Testing**: Jest, React Testing Library  
**Target Platform**: Logi-Slate-UI  
**Project Type**: React component  

## Project Structure

```text
Logi-Slate-UI/src/
├── components/
│   └── PrimordiaOverlay/
│       ├── index.tsx         # [NEW] Main overlay component
│       ├── EvalBar.tsx       # [NEW] Evaluation bar
│       └── Breakdown.tsx     # [NEW] Detailed breakdown
└── hooks/
    └── usePrimordiaEval.ts   # [NEW] Evaluation hook
```
