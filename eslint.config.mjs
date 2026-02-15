import { defineConfig, globalIgnores } from "eslint/config";
import ejsJs from "eslint-plugin-ejs-js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { includeIgnoreFile } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default defineConfig([
  globalIgnores(["node_modules", "public/src/"]),
  includeIgnoreFile(gitignorePath),
  {
    extends: compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "prettier",
    ),

    plugins: {
      "ejs-js": ejsJs,
      "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        gtag: true,
      },

      ecmaVersion: 2017,
      sourceType: "module",
    },

    rules: {
      "@typescript-eslint/explicit-function-return-type": ["error", {
        allowExpressions: true,
      }],

      "comma-spacing": ["error", {
        before: false,
          after: true,
      }],

      curly: ["error", "all"],
      "default-case": "error",
      eqeqeq: ["error", "always"],
      indent: ["error", 2],
      "max-depth": ["error", 3],
      "no-constant-condition": "error",
      "no-console": 0,
      "no-control-regex": "error",
      "no-dupe-args": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-empty-function": "error",
      "no-eval": "error",
      "no-func-assign": "error",
      "no-ignore": "off",
      "no-irregular-whitespace": "error",
      "no-lonely-if": "error",
      "no-trailing-spaces": "error",
      "no-unreachable": "error",
      "no-var": "error",
      "no-cond-assign": "error",
      "prefer-const": "warn",
      "space-before-blocks": "error",
      "space-in-parens": "error",
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      strict: [0, "global"],

      quotes: ["error", "double", {
        allowTemplateLiterals: true,
      }],

      semi: ["error", "always"],
    },
  },
]);
