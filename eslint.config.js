import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import pluginReact from "eslint-plugin-react";

export default [
  { ignores: ["dist", "auto-imports.d.ts"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        // ✅ Load auto-import globals so eslint doesn't cry about missing imports
        ...require("./.eslintrc-auto-import.json").globals,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react: pluginReact,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react/react-in-jsx-scope": "off", // Not needed with React 17+
      "react/prop-types": "off",
      "no-unused-vars": "warn",
    },
    settings: {
      react: { version: "detect" },
    },
  },
];