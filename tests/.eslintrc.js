module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    node: true,
    jest: true,
  },
  extends: "eslint:recommended",
  rules: {
    "no-console": "off",
  },
};
