const js = require('@eslint/js');
const cypressPlugin = require('eslint-plugin-cypress');

module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**', '.git/**']
  },
  js.configs.recommended,
  // Config for CommonJS files (cypress.config.js, etc.)
  {
    files: ['cypress.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        process: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off'
    }
  },
  // Config for Cypress support and test files (ES6 modules)
  {
    files: ['cypress/**/*.js', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Node.js globals
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        process: 'readonly',
        // Browser globals
        console: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        document: 'readonly',
        window: 'readonly',
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
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off'
    }
  }
];
