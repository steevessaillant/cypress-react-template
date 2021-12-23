import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders information about today', () => {
  mount(<App />);
  cy.get('header').contains('Information about Today');
});

it('renders Weather about today', () => {
  mount(<App />);
  cy.contains('Forecast for Today');
});


it('renders app and fetch elemnet using react-selector', () => {
  mount(<App />);

// cypress-react-selector helps identifying elements using native react pro[erties - component, props and states
// find more here - https://github.com/abhinaba-ghosh/cypress-react-selector
  cy.waitForReact();
  cy.react('App').should('be.visible');
});
