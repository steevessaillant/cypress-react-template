
import { mount } from '@cypress/react';
import Weather from './Weather';
import { WeatherData } from './Weather';

class MyProps implements WeatherData {
  city!: string;
  description!: string;
  temperature!: number;
  winds?: string | undefined;
  pressure?: string | undefined;

}
const TEST = "Test";
const props = new MyProps();
props.city = TEST;
props.description = TEST;
props.temperature = 0;


it('renders properties and graphics', () => {  
mount(<Weather city={props.city} description={props.description} temperature={props.temperature} />);
  cy.waitForReact();
  cy.get('img', { includeShadowDom: true })
        .filter('[src]')
        .filter(':visible')
        .should(($images) => $images.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)));

  cy.contains(props.city);
  cy.contains(props.description);
  cy.contains(props.temperature);
});


it('renders Weather and fetch element using react-selector', () => {
  mount(<Weather description={props.description} city={props.city} temperature={props.temperature} />);
// cypress-react-selector helps identifying elements using native react properties - component, props and states
// find more here - https://github.com/abhinaba-ghosh/cypress-react-selector
  cy.waitForReact();
  cy.react('Weather').should('be.visible');
});

