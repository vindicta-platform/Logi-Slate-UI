# Tasks: Replay Player

**Input**: specs/009-replay-player/ | **Prerequisites**: spec.md, plan.md

## Phase 1: Setup

- [ ] T001 Create `components/ReplayPlayer/` directory
- [ ] T002 [P] Create `stores/replayStore.ts`

---

## Phase 2: Foundational

- [ ] T003 Define Replay and TurnState TypeScript types
- [ ] T004 Implement replay data fetching from Firestore
- [ ] T005 Create base player container component

---

## Phase 3: User Story 1 - Play Back Recorded Game (P1) 🎯 MVP

- [ ] T006 [US1] Implement Controls component (prev/next/play/pause)
- [ ] T007 [US1] Create TurnView component for state display
- [ ] T008 [US1] Wire navigation to replayStore
- [ ] T009 [US1] Implement auto-advance with configurable speed
- [ ] T010 [US1] Add keyboard shortcuts (arrow keys, space)

---

## Phase 4: User Story 2 - View Turn Annotations (P2)

- [ ] T011 [US2] Create Annotations sidebar component
- [ ] T012 [US2] Display AI insights per turn
- [ ] T013 [US2] Support annotation collapse/expand

---

## Phase 5: Polish

- [ ] T014 [P] Handle corrupted turn data gracefully
- [ ] T015 [P] Add smooth transition animations
- [ ] T016 Write component tests
