import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';



export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: 'vitest.setup.ts',
    coverage: {
      include: ['app/**/*.{js,jsx,ts,tsx}'],
      reporter: ['text', 'json', 'html'],
      provider: 'v8',
    },
  },
})