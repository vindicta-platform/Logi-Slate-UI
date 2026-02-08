# Logi-Slate-UI

A React/TypeScript tactical management interface for competitive Warhammer 40k.

## Overview

Logi-Slate-UI provides the frontend interface for the Vindicta Platform, enabling players to manage army lists, track games, and analyze tactical decisions.

## Features

- **Army Builder**: Visual list construction with point validation
- **Game Tracker**: Turn-by-turn state management during matches
- **Analytics Dashboard**: Post-game analysis and statistics
- **Mobile-First**: Responsive design for tablet and phone use

## Tech Stack

- React 18+ with TypeScript
- Zustand for state management
- Tailwind CSS for styling
- Vite for build tooling

## Installation

Clone and install from source:

```bash
git clone https://github.com/vindicta-platform/Logi-Slate-UI.git
cd Logi-Slate-UI
npm install
```

## Development

```bash
# Clone and install
git clone https://github.com/vindicta-platform/Logi-Slate-UI.git
cd Logi-Slate-UI
npm install

# Start dev server
npm run dev
```

## Design System

- **Theme**: Amber-500 accent, dark mode default
- **Typography**: Outfit font family
- **Effects**: Glassmorphism, subtle animations

## Related Repositories

| Repository | Relationship |
|------------|-------------|
| [platform-core](https://github.com/vindicta-platform/platform-core) | Backend API |
| [WARScribe-Parser](https://github.com/vindicta-platform/WARScribe-Parser) | Data validation |

## Platform Documentation

> **📌 Important:** All cross-cutting decisions, feature proposals, and platform-wide architecture documentation live in [**Platform-Docs**](https://github.com/vindicta-platform/Platform-Docs).
>
> Any decision affecting multiple repos **must** be recorded there before implementation.

- 📋 [Feature Proposals](https://github.com/vindicta-platform/Platform-Docs/tree/main/docs/proposals)
- 🏗️ [Architecture Decisions](https://github.com/vindicta-platform/Platform-Docs/tree/main/docs)
- 📖 [Contributing Guide](https://github.com/vindicta-platform/Platform-Docs/blob/main/CONTRIBUTING.md)

## License

MIT License - See [LICENSE](./LICENSE) for details.
