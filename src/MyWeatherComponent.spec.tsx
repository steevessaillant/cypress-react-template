import React from 'react';
import { mount } from '@cypress/react';
import MyWeatherComponent from './MyWeatherComponent';

it('renders with all images', () => {
  mount(<MyWeatherComponent />);
  cy.waitForReact();
  cy.get('img', { includeShadowDom: true })
        .filter('[src]')
        .filter(':visible')
        .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)));
});


it('renders MyWeatherComponent and fetch element using react-selector', () => {
  mount(<MyWeatherComponent city={'Montreal'} description={'Ciel Variable'} temperature={'3 C'} />);

// cypress-react-selector helps identifying elements using native react properties - component, props and states
// find more here - https://github.com/abhinaba-ghosh/cypress-react-selector
  cy.waitForReact();
  cy.react('MyWeatherComponent').should('be.visible');
});

/*
it('should call the weather service and display the local weather', () => {
 

});
*/
