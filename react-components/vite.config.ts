/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { configDefaults, defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.ts'],
    coverage: {
      exclude: [...configDefaults.exclude, 'src/main.tsx', '**/*.interface.ts', '**/*.test.tsx', 'src/vite-env.d.ts'],
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
    },
  },
})

