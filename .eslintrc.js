module.exports = {
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  extends: [
    'prettier',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:markdown/recommended',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: '>=16.8.0',
    },
  },
  plugins: ['react', 'babel', 'jest', '@typescript-eslint', 'react-hooks', 'markdown'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'prefer-const': 2,
    'no-var': 2,
    'comma-dangle': 0,
    'allow-parens': 0,
    'no-multiple-empty-lines': 2,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
  },
};
