# Logi-Slate-UI Roadmap

> **Vision**: Web/mobile frontend for WARScribe notation and Primordia AI
> **Status**: Active Development
> **Last Updated**: 2026-02-03

---

## v1.0 Target: April 2026

### Mission Statement
Deliver a production-ready tactical management interface that serves as both the user-facing frontend for the Vindicta Platform AND the primary data ingestion point for new game recordings.

---

## Milestone Timeline

```
┌─────────────────────────────────────────────────────────────────┐
│  Feb 2026          Mar 2026          Apr 2026                   │
│  ─────────────────────────────────────────────────────────────  │
│  [v0.1.0]          [v0.2.0]          [v0.3.0]      [v1.0.0]     │
│  Core UI           Game Tracker      AI Integration Polished    │
│                                                                  │
│  Week 2-3          Week 4-5          Week 6-7      Week 8       │
└─────────────────────────────────────────────────────────────────┘
```

---

## v0.1.0 — Core UI (Target: Feb 17, 2026)

### Deliverables
- [ ] React 18 + TypeScript foundation
- [ ] Zustand state management
- [ ] Design system (Amber-500, dark mode, Outfit font)
- [ ] Component library (buttons, cards, forms)
- [ ] Responsive layout (mobile-first)
- [ ] Firebase Hosting deployment

### Key Measurable Results
| Metric | Target | Measurement |
|--------|--------|-------------|
| **Lighthouse Score** | 90+ performance | Lighthouse audit |
| **Mobile Usability** | Works on 375px+ | Device testing |
| **Component Coverage** | 10+ components | Code review |

### Exit Criteria
- [ ] Deployed to Firebase Hosting
- [ ] Dark mode functional
- [ ] Responsive on mobile and desktop

---

## v0.2.0 — Game Tracking (Target: Mar 3, 2026)

### Deliverables
- [ ] Army list viewer
- [ ] Turn-by-turn game entry
- [ ] Phase navigation
- [ ] Event recording interface
- [ ] WARScribe-Core integration
- [ ] Local storage persistence

### Key Measurable Results
| Metric | Target | Measurement |
|--------|--------|-------------|
| **Game Recording Time** | <30 sec per action | User testing |
| **Data Persistence** | 100% survival on refresh | Integration test |
| **WARScribe Output** | Valid transcripts | Schema validation |

### Exit Criteria
- [ ] Record a full game turn-by-turn
- [ ] Export to WARScribe format
- [ ] Games persist locally

---

## v0.3.0 — AI Integration (Target: Mar 17, 2026)

### Deliverables
- [ ] Primordia AI evaluation overlay
- [ ] Meta-Oracle list grading
- [ ] Opening Book recommendations
- [ ] Replay Player component
- [ ] Cloud sync (Firebase)

### Key Measurable Results
| Metric | Target | Measurement |
|--------|--------|-------------|
| **AI Response Time** | <5 sec for evaluation | Performance test |
| **Replay Smoothness** | 60fps playback | Browser profiling |
| **Sync Reliability** | 99%+ success | Error rates |

### Exit Criteria
- [ ] See Primordia evaluation during game
- [ ] Get Meta-Oracle list grade
- [ ] Replay past games

---

## v1.0.0 — Production Release (Target: Apr 21, 2026)

### Deliverables
- [ ] Stream mode (OBS overlay)
- [ ] PWA installation (iOS/Android)
- [ ] Analytics dashboard
- [ ] Performance optimization
- [ ] Accessibility audit

### Key Measurable Results
| Metric | Target | Measurement |
|--------|--------|-------------|
| **Lighthouse Score** | 95+ all categories | Lighthouse audit |
| **PWA Installable** | iOS + Android | Device testing |
| **Accessibility** | WCAG 2.1 AA | Axe audit |
| **Active Users** | 100+ monthly | Analytics |

### Exit Criteria
- [ ] Installable as PWA
- [ ] Stream overlay functional
- [ ] No critical bugs for 2 weeks

---

## Design System

| Token | Value |
|-------|-------|
| **Primary Color** | Amber-500 (#F59E0B) |
| **Background** | Dark mode default |
| **Font Family** | Outfit |
| **Border Radius** | 8px |
| **Spacing Scale** | 4px base |

### Effects
- Glassmorphism for cards
- Subtle micro-animations
- Smooth transitions (200ms ease)

---

## Circular Data Pipeline

> [!IMPORTANT]
> Logi-Slate-UI is both a **consumer** AND **data source**. Games recorded here feed the Opening Book and train Primordia AI.

```
┌─────────────────────────────────────────────────────────────────┐
│  Player records game in Logi-Slate                               │
│                    ↓                                             │
│  WARScribe transcript created                                    │
│                    ↓                                             │
│  Transcript feeds Opening Book + Primordia training              │
│                    ↓                                             │
│  Better recommendations attract more players                     │
│                    ↓                                             │
│  More games recorded → Flywheel effect                           │
└─────────────────────────────────────────────────────────────────┘
```

---

## Core Features

| Feature | Description | Version |
|---------|-------------|---------|
| **Army Builder** | Visual list construction | v0.2 |
| **Game Tracker** | Turn-by-turn recording | v0.2 |
| **Replay Player** | Playback past games | v0.3 |
| **AI Overlay** | Primordia evaluation | v0.3 |
| **List Grader** | Meta-Oracle integration | v0.3 |
| **Stream Mode** | OBS-friendly overlay | v1.0 |
| **PWA** | Installable app | v1.0 |

---

## Dependencies

| Dependency | Status | Notes |
|------------|--------|-------|
| WARScribe-Core | 🔄 Parallel | Transcript format |
| Primordia AI | 🔄 Parallel | Evaluation API |
| Meta-Oracle | 🔄 Parallel | Grading API |
| Firebase | ✅ Available | Hosting, Auth, Sync |
| React 18 | ✅ Available | UI framework |
| Vite | ✅ Available | Build tooling |

---

## Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Mobile performance | Medium | High | Optimize early |
| AI latency frustrating | Medium | Medium | Loading states |
| Firebase costs | Low | Medium | Free tier monitoring |
| Browser compatibility | Low | Medium | Baseline browser targets |

---

## Success Criteria for v1

1. **Adoption**: 100+ monthly active users
2. **Data Generation**: 50+ games recorded per month
3. **Performance**: 95+ Lighthouse score
4. **Platform**: Works on web, iOS, Android (PWA)

---

*Maintained by: Vindicta Platform Team*
