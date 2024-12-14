// eslint.config.mjs
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

// __filename と __dirname を取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FlatCompat のインスタンスを作成
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// サニタイズされたグローバルオブジェクトを作成
const sanitizedGlobals = { ...globals.browser };

// 不要なキーを削除（例: スペースが含まれるキー）
for (const key in sanitizedGlobals) {
  if (key.trim() !== key) {
    console.warn(
      `Global "${key}" に先頭または末尾のスペースが含まれています。削除します。`
    );
    delete sanitizedGlobals[key];
  }
}

export default [
  // 既存の設定を拡張
  ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ),
  {
    // `plugins` フィールドを削除
    // plugins: { react, "@typescript-eslint": typescriptEslint }, // 削除

    languageOptions: {
      globals: sanitizedGlobals,

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "@typescript-eslint/no-empty-function": ["off"],

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "jsx",
        },
      ],

      "react/jsx-key": ["error"],
      "react/prop-types": ["off"],
      "react/react-in-jsx-scope": ["off"],
      "react/jsx-uses-react": ["off"],
    },
  },
];
