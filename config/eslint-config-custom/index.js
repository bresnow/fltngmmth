/** @type {import("eslint/conf/eslint-all")} */
let config = {
  extends: ["@remix-run/eslint-config", "prettier"],
  ignorePatterns: ["node_modules", "build"],
  importAssertions: true,
  settings: {
    files: ["**/*.js", "**/*.mjs", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  },
};

module.exports = config;
