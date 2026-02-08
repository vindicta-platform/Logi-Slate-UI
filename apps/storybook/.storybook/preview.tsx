import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@vindicta/ui-kit";
import "@vindicta/ui-kit/styles";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#0f172a' },
                { name: 'light', value: '#f8fafc' },
            ],
        },
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;
