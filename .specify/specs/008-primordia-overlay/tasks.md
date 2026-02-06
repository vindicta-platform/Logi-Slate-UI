# Tasks: Primordia Overlay

**Input**: specs/008-primordia-overlay/ | **Prerequisites**: spec.md, plan.md

## Phase 1: Setup

- [ ] T001 Create `components/PrimordiaOverlay/` directory
- [ ] T002 [P] Create `hooks/usePrimordiaEval.ts`

---

## Phase 2: Foundational

- [ ] T003 Define Evaluation TypeScript types
- [ ] T004 Setup Primordia-AI SDK client
- [ ] T005 Create base overlay container component

---

## Phase 3: User Story 1 - View Position Evaluation (P1) 🎯 MVP

- [ ] T006 [US1] Implement EvalBar component with score display
- [ ] T007 [US1] Create usePrimordiaEval hook for real-time updates
- [ ] T008 [US1] Trigger evaluation on turn action logged
- [ ] T009 [US1] Build Breakdown tooltip component
- [ ] T010 [US1] Show loading state during evaluation

---

## Phase 4: User Story 2 - Toggle Overlay Visibility (P2)

- [ ] T011 [US2] Add toggle button to overlay
- [ ] T012 [US2] Persist visibility preference in localStorage
- [ ] T013 [US2] Add keyboard shortcut for toggle

---

## Phase 5: Polish

- [ ] T014 [P] Handle Primordia API unavailable gracefully
- [ ] T015 [P] Add smooth animations for updates
- [ ] T016 Write component tests
