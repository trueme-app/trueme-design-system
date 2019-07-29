const { jestPreset: tsJest } = require('ts-jest');

module.exports = {
  ...tsJest,
  setupFiles: ["<rootDir>src/tests/setup.ts"],
  roots: ["<rootDir>/src/"],
  globals: {
    "window": true,
    "ts-jest": {
      babelConfig: false,
    }
  }
};
