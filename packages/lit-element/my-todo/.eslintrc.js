module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
}
