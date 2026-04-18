// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import './commands'
require('cypress-xpath')
import "cypress-real-events/support";

import 'cypress-file-upload';
require('cypress-iframe');

// Handle uncaught exceptions - ignore ResizeObserver errors from YouTube
Cypress.on('uncaught:exception', (err, _runnable) => {
    // Ignore ResizeObserver loop errors (common in modern web apps)
    if (err.message.includes('ResizeObserver loop completed')) {
        return false; // Don't fail the test
    }
    // Let other errors fail the test normally
    return true;
});