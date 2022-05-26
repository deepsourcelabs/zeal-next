import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'zeal-next',
      formats: ['es', 'umd'],
      fileName: (format) => `zeal-next.${format === 'es' ? 'm' : ''}js`
    },
    rollupOptions: {
      external: ['vue', 'unplugin-icons', '@iconify-json/lucide', '@vue/compiler-sfc'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'html', 'cobertura'],
      exclude: [
        '*.config.{js,ts}',
        '.storybook/*',
        '**/*.stories.{js,ts}',
        'src/main.ts',
        '**/*.d.ts',
        '.eslintrc.cjs',
        '**/__tests__/*'
      ],
      all: true
    }
  }
})
