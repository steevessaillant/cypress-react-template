/// <reference types="cypress" />
/// <reference types="cypress-react-selector" />
declare namespace Cypress {
  export interface Chainable {
    clickButtonWithText(text: string): Chainable;
  }
}
