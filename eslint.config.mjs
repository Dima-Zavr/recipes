import globals from "globals"
import pluginJs from "@eslint/js"
import pluginTs from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort"


export default [
    { files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    {
        plugins: [
            { "simple-import-sort": pluginSimpleImportSort }
        ],
        ignores: ["node_modules/"],
        overrides: [
            {
                files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
                rules: {
                    "simple-import-sort/exports": "error",
                    "simple-import-sort/imports": [
                        "error",
                        {
                            groups: [
                                ["^.+\\.?(css)$"],
                                ["^react", "^\\w"],
                                ["^@\\w"],
                                ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                                ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]
                            ]
                        }
                    ]
                }
            }
        ]
    },
    pluginJs.configs.recommended,
    pluginTs.configs.recommended,
    pluginReact.configs.flat.recommended
]