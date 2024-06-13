import custom from '../webpack.config';

const path = require('path');
const config = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],

  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...custom.module.rules],
      },
    };
  },

  loader: { '.js': 'jsx' },

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {
    autodocs: true,
  },
};
export default config;
