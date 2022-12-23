const commonExtensions = [
  "eslint:recommended",
  "plugin:sort/recommended",
  "plugin:prettier/recommended",
  "plugin:jsdoc/recommended",
];

const commonPrettierExtension = commonExtensions[2];

const commonPlugins = ["sort", "jsdoc"];

const commonPrettierConfig = {
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 80,
  quoteProps: "consistent",
  semi: true,
  trailingComma: "es5",
};

/** @type {import("eslint").Linter.ConfigOverride} */
const yamlConfig = {
  extends: ["plugin:yaml/recommended", commonPrettierExtension],
  files: ["*.yaml", "*.yml"],
  plugins: ["yaml"],
  rules: {
    "prettier/prettier": ["error", { ...commonPrettierConfig, parser: "yaml" }],
  },
};

/** @type {import("eslint").Linter.ConfigOverride} */
const jsonConfig = {
  extends: ["plugin:jsonc/recommended-with-jsonc", commonPrettierExtension],
  files: ["*.json", "*.jsonc"],
  parser: "jsonc-eslint-parser",
  rules: {
    "prettier/prettier": ["error", { ...commonPrettierConfig, parser: "json" }],
  },
};

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: false,
    es2022: true,
    jest: true,
    node: true,
  },
  extends: [...commonExtensions],
  globals: {
    RequestInit: true,
  },
  overrides: [jsonConfig, yamlConfig],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "script",
  },
  plugins: [...commonPlugins],
  root: true,
  rules: {
    "array-bracket-spacing": ["error", "never"],
    "jsdoc/check-alignment": "error",
    "jsdoc/check-examples": "off",
    "jsdoc/check-indentation": ["error", { excludeTags: ["example"] }],
    "jsdoc/no-undefined-types": "off",
    "jsdoc/require-param-description": "off",
    "jsdoc/require-returns-description": "off",
    // "jsdoc/check-param-names": [
    //   "error",
    //   { checkDestructured: false, disableExtraPropertyReporting: true },
    // ],
    "no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", ignoreRestSiblings: true },
    ],
    "object-curly-spacing": ["error", "always"],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", next: ["function", "return"], prev: "*" },
    ],
  },
  settings: {
    jsdoc: {
      mode: "typescript",
    },
  },
};
