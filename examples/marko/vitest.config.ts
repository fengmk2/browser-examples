import { defineConfig } from '@voidzero-dev/vite-plus'
import { playwright } from '@voidzero-dev/vite-plus/test/browser-playwright'
import marko from '@marko/vite'

export default defineConfig({
  plugins: [marko()],
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [
        { browser: 'chromium' },
      ],
    },
  },
})
