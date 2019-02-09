const path = require('path');

module.exports = {
  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  env: {
    es6: true,
    mongo: true,
    node: true,
    browser: true
  },

  globals: {
    Raven: false
  },

  extends: [
    'airbnb'
  ],

  plugins: [
    'import',
    'jsx-a11y',
    'react'
  ],

  rules: {
    indent: ['error', 4, {
      SwitchCase: 1
    }],
    radix: ['off'],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/tabindex-no-positive': ['off'],
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    "jsx-a11y/label-has-for": [2, {
      "required": {
        "every": ["id"]
      },
    }],
    'jsx-a11y/click-events-have-key-events': ['off'],
    // TODO: remove this prefer-destructuring config
    "react/destructuring-assignment": ['off', 'always'],
    'prefer-destructuring': ['off'],
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    'react/forbid-prop-types': ['off', { allow: ['warn'] }],
    'react/no-did-mount-set-state': ['warn'],
    'react/no-array-index-key': ['warn'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'import/prefer-default-export': 0,
    'no-unused-vars': ['error', { varsIgnorePattern: 'style' }],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-underscore-dangle': ['off'],
    'max-depth': ['error', 4],
    'max-len': ['error', {
      code: 180,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    'react/sort-comp': ['error', {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ]
    }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/no-extraneous-dependencies': ["error", { devDependencies: true, }]
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(path.join(__dirname, 'webpack.dev.config.js'))
      }
    }
  }
};
