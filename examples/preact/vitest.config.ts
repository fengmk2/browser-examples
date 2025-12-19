import { defineConfig } from '@voidzero-dev/vite-plus'
import { playwright } from '@voidzero-dev/vite-plus/test/browser-playwright'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
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
