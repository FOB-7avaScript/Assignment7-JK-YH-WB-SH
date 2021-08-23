module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['standard-with-typescript', 'prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-use-before-define': 'off',
  },
};
