// @ts-ignore
import custom from "../webpack.config";
import { StorybookConfig } from "@storybook/react-webpack5";
import { Configuration as WebpackConfig } from 'webpack';

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  webpackFinal: async (config: WebpackConfig) => {
    if (config.module) {
      return {
        ...config,
        module: {
          ...config.module,
          rules: [...config.module.rules, ...custom.module.rules],
        },
      };
    }
    return config;
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;
