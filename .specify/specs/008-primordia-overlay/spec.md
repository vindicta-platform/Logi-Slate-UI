# Feature Specification: Primordia Overlay

**Feature Branch**: `008-primordia-overlay`  
**Created**: 2026-02-06  
**Status**: Draft  
**Target**: Week 6 (Mar 11)

## User Scenarios & Testing

### User Story 1 - View Position Evaluation (Priority: P1)

During game tracking, players see real-time tactical evaluation.

**Acceptance Scenarios**:
1. **Given** active game with Primordia integration, **When** turn action logged, **Then** evaluation updates
2. **Given** evaluation displayed, **When** hovered, **Then** detailed breakdown shown

---

### User Story 2 - Toggle Overlay Visibility (Priority: P2)

Players can show/hide the AI overlay as desired.

**Acceptance Scenarios**:
1. **Given** game tracker, **When** user toggles overlay, **Then** visibility changes

---

## Requirements

### Functional Requirements
- **FR-001**: System MUST display position evaluation score
- **FR-002**: System MUST update evaluation after each action
- **FR-003**: System MUST allow overlay toggle
- **FR-004**: System MUST show loading state during evaluation

### Key Entities
- **Evaluation**: score, confidence, breakdown[], timestamp
- **OverlayConfig**: visible, position, size

## Success Criteria
- **SC-001**: Evaluation updates within 3 seconds of action
- **SC-002**: Overlay adds <50ms to render time
