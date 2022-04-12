const { mergeConfig } = require('vite')

module.exports = {
  async viteFinal(config, { configType }) {
    config.resolve.dedupe = ['@storybook/client-api']
    return config
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite'
  }
}
