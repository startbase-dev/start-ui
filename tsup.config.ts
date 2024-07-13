import { sassPlugin } from 'esbuild-sass-plugin';
import { defineConfig } from "tsup";

export default defineConfig({
    "entry": [
        "src/index.ts"
    ],
    "format": [
        "esm",
        "cjs"
    ],
    "loader": {
        ".css": "local-css",
        ".js": "jsx",
        ".ts": "tsx"
    },
    "dts": false,
    "sourcemap": false,
    "clean": false,
    esbuildPlugins: [
        sassPlugin({
            type: 'lit-css'
        })
    ]
});