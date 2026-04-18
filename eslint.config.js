const js = require('@eslint/js');
const cypressPlugin = require('eslint-plugin-cypress');

module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**', '.git/**']
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Cypress globals
        cy: 'readonly',
        Cypress: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        before: 'readonly',
        after: 'readonly',
        expect: 'readonly'
      }
    },
    plugins: {
      cypress: cypressPlugin
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
      'no-unused-vars': ['warn'],
      'no-console': 'off'
    }
  }
];
