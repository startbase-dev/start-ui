import { sassPlugin, postcssModules } from "esbuild-sass-plugin";
import { defineConfig } from "tsup";
import postcss from "postcss";
import fs from "fs";
import path from "path";
import cssnano from "cssnano";

const renamePlugin = () => ({
  name: "rename-plugin",
  setup(build) {
    const write = build.initialOptions.write;
    build.initialOptions.write = false;

    build.onEnd(async (result) => {
      try {
        // Ensure outputFiles exists
        if (!result.outputFiles) {
          console.error("No output files found.");
          return;
        }

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
    ".js": "jsx",
    ".ts": "tsx",
  },
  dts: false,
  sourcemap: false,
  clean: false,
  esbuildPlugins: [
    sassPlugin({
      filter: /\.module\.scss$/,
      transform: postcssModules({
        generateScopedName: "[hash:base64:8]--[local]",
        localsConvention: "camelCaseOnly",
      }),
    }),
    sassPlugin({
      filter: /\.scss$/,
    }),
    renamePlugin(),
  ],
});
