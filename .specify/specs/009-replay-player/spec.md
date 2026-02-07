# Feature Specification: Replay Player

**Feature Branch**: `009-replay-player`  
**Created**: 2026-02-06  
**Status**: Draft  
**Target**: Week 6 (Logi-Slate-UI v0.2.0)

## User Scenarios & Testing

### User Story 1 - Play Back Recorded Game (Priority: P1)

Players step through past games turn-by-turn.

**Acceptance Scenarios**:
1. **Given** completed game, **When** opened in replay, **Then** turn navigation available
2. **Given** replay mode, **When** user clicks next/prev, **Then** board state advances/rewinds

---

### User Story 2 - View Turn Annotations (Priority: P2)

Players see annotations and AI insights per turn.

**Acceptance Scenarios**:
1. **Given** turn view, **When** annotations exist, **Then** displayed in sidebar

---

## Requirements

### Functional Requirements
- **FR-001**: System MUST display turn-by-turn navigation
- **FR-002**: System MUST render game state at each turn
- **FR-003**: System MUST support play/pause auto-advance
- **FR-004**: System MUST show turn annotations

### Key Entities
- **Replay**: gameId, turns[], currentIndex
- **TurnState**: turnNumber, boardState, actions[], annotations[]

## Success Criteria
- **SC-001**: Replay loads in under 2 seconds
- **SC-002**: Turn navigation smooth (<100ms response)
