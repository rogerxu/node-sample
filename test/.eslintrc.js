module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    mocha: true,
    node: true,
  },
  extends: "eslint:recommended",
  rules: {
    "no-console": "off",
  },
};
