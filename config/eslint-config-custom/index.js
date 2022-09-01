/** @type {import("eslint/conf/eslint-all")} */
let config = {
  extends: ["@remix-run/eslint-config", "prettier", "eslint-plugin-remix"],
  ignorePatterns: ["node_modules", "build"],
  settings: {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  },
};

module.exports = config;
