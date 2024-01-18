import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    alias: {
      '~/': new URL('./src/', import.meta.url).pathname,
    },
    css: true,
    coverage: {
      exclude: ['next-env.d.ts', '.next', '**config.[j|t]s', '**/**route.[j|t]s'],
    },
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, './e2e/**', '**.config.[j|t]s'],
    setupFiles: ['./vitest-setup.ts'],
  },
});
