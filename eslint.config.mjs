import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook'
import fsdImport from "eslint-plugin-fsd-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  pluginReact.configs.flat.recommended,
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
  ...storybook.configs['flat/recommended'],
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      "fsd-import": fsdImport,
    },
    rules: {
      "react/prop-types": "off",
      "no-unused-vars": "off",
      "no-undef": "off",
      "fsd-import/fsd-relative-path": "error",
      "fsd-import/public-api-imports": "error",
      "fsd-import/layer-imports": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];