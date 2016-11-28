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
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      // imports: 'always-multiline',
      // exports: 'always-multiline',
      // functions: 'always-multiline', // set to 'ignore' by default
    }],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'as-needed', { keywords: true, numbers: true }],
  },
}
