import { defineConfig } from '@voidzero-dev/vite-plus'
import { playwright } from '@voidzero-dev/vite-plus/test/browser-playwright'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
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
