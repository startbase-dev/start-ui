import { sassPlugin } from "esbuild-sass-plugin";
import { defineConfig } from "tsup";
import postcss from "postcss";
import autoprefixer from "autoprefixer";

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
    // @ts-ignore
    sassPlugin({
      type: "local-css",
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source);
        return css;
      },
    }),
  ],
});
