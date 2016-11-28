/**
 * [eslint rule docs](http://eslint.org/docs/rules/)
 */

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    node: true,
  },
  extends: 'eslint:recommended',
  rules: {
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
  },
}
