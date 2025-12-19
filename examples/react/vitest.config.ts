import { defineConfig } from '@voidzero-dev/vite-plus'
import { playwright } from '@voidzero-dev/vite-plus/test/browser-playwright'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
