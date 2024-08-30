/*
 * @LastEditors: luo
 * @LastEditTime: 2024-08-30 16:38:00
 * @Description: 
 */
import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      include: ['*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
    }
  })
)
