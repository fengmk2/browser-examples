import { playwright } from '@voidzero-dev/vite-plus/test/browser-playwright'
import { defineConfig } from '@voidzero-dev/vite-plus'

export default defineConfig({
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
