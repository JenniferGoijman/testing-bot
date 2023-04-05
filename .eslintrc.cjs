module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 0,
    'react/prop-types': 0,
    'object-curly-newline': 'off',
    'arrow-parens': 0,
    quotes: ['error', 'single'],
    'template-curly-spacing': 'off',
    'max-len': ['error', { code: 190 }],
    'no-unused-vars': 0,
    'import/prefer-default-export': 0,
    'import/extensions': ['error', 'always'],
  },
};
