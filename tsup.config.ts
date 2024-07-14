import { sassPlugin } from "esbuild-sass-plugin";
import { defineConfig } from "tsup";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import postcssModules from "postcss-modules";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  loader: {
    ".css": "local-css",
    ".js": "jsx",
    ".ts": "tsx",
  },
  dts: false,
  sourcemap: false,
  clean: false,
  esbuildPlugins: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    sassPlugin({
      type: "local-css",
      async transform(source) {
        const { css } = await postcss([
          autoprefixer,
          postcssModules({
            generateScopedName: "SUI__[local]___[hash:base64:5]",
          }),
          postcssPresetEnv({
            stage: 1,
          }),
        ]).process(source);
        return css;
      },
    }),
  ],
});
