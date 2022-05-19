const { mergeConfig } = require('vite')
const Icons = require('unplugin-icons/vite')
const path = require('path')
const dirPath = path.resolve(__dirname, '../src')

module.exports = {
  async viteFinal(config, { configType }) {
    config.resolve.dedupe = ['@storybook/client-api']
    return mergeConfig(config, {
      plugins: [Icons({ compiler: 'vue3' })],
      resolve: {
        alias: {
          '@': dirPath
        }
      }
    })
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite'
  }
}
