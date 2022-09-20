module.exports = {
  root: true,
  extends: ["custom"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      plugins: ["@babel/plugin-syntax-import-assertions"],
    },
  },
};
