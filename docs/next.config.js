// eslint-disable-next-line @typescript-eslint/no-require-imports
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra();
