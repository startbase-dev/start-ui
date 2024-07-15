import { sassPlugin } from "esbuild-sass-plugin";
import { defineConfig } from "tsup";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import postcssModules from "postcss-modules";
// @ts-ignore
import postcssPresetEnv from "postcss-preset-env";
import fs from "fs";
import path from "path";
import cssnano from "cssnano";

const renamePlugin = () => ({
  name: "rename-plugin",
  // @ts-ignore
  setup(build) {
    const write = build.initialOptions.write;
    build.initialOptions.write = false;

    // @ts-ignore
    build.onEnd(async (result) => {
      try {
        // Ensure outputFiles exists
        if (!result.outputFiles) {
          console.error("No output files found.");
          return;
        }

        // @ts-ignore
        for (const file of result.outputFiles) {
          if (file.path.endsWith("index.css")) {
            const newPath = file.path.replace("index.css", "styles.css");
            const newContents = file.text.replace(/index\.css/g, "styles.css");
            file.path = newPath;
            file.contents = new TextEncoder().encode(newContents);

            // Minify the CSS using cssnano
            const minified = await postcss([cssnano]).process(newContents, {
              from: undefined,
            });
            file.contents = new TextEncoder().encode(minified.css);
          }
        }

        // Write the files to disk if the original `write` option was true
        if (write === undefined || write) {
          // @ts-ignore
          result.outputFiles.forEach((file) => {
            fs.mkdirSync(path.dirname(file.path), { recursive: true });
            fs.writeFileSync(file.path, file.contents);
          });
        }
      } catch (e) {
        console.error("Failed to rename file:", e);
      }
    });
  },
});

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
    // @ts-ignore
    sassPlugin({
      type: "local-css",
      async transform(source, filePath) {
        const { css } = await postcss([
          autoprefixer,
          postcssModules({
            generateScopedName: "[local]-SUI",
            getJSON: () => {}, // No-op function to prevent JSON file creation
          }),
          postcssPresetEnv({
            stage: 1,
          }),
        ]).process(source, { from: filePath });
        return css;
      },
    }),
    renamePlugin(),
  ],
});
