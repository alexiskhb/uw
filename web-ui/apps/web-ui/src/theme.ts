import { createSystem, defaultConfig } from '@chakra-ui/react';

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#f5f7ff' },
          100: { value: '#e4e9ff' },
          200: { value: '#c5c9ff' },
          300: { value: '#a6a9ff' },
          400: { value: '#7a7dff' },
          500: { value: '#4e51ff' },
          600: { value: '#3e41cc' },
          700: { value: '#2e3199' },
          800: { value: '#1e2166' },
          900: { value: '#0e1133' },
        },
      },
      fonts: {
        heading: { value: "'Inter', sans-serif" },
        body: { value: "'Inter', sans-serif" },
      },
    },
  },
});

export default system;
