module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  env: {
    mocha: true,
  },
  extends: "eslint:recommended",
  rules: {
    "no-console": "off",
  },
};
