module.exports = {
  root: true,
  // parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  env: {
    node: true,
    es6: true,
  },
  extends: "eslint:recommended",
  rules: {
    "no-console": "off",
  },
};
