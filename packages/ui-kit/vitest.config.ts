/// <reference types="vitest" />
import { mergeConfig, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: ['./src/test-setup.ts'],
            css: {
                modules: {
                    classNameStrategy: 'non-scoped',
                },
            },
            coverage: {
                provider: 'v8',
                reporter: ['text', 'lcov'],
                include: ['src/**/*.{ts,tsx}'],
                exclude: [
                    'src/**/*.test.{ts,tsx}',
                    'src/**/*.stories.{ts,tsx}',
                    'src/test-setup.ts',
                    'src/index.ts',
                ],
                thresholds: {
                    statements: 80,
                    branches: 80,
                    functions: 80,
                    lines: 80,
                },
            },
        },
    })
);
