import React from 'react';
import { mount } from '@cypress/react';

it('uses a custom command written in TypeScript', () => {
  const Comp: React.FC = () => {
    const onClick = cy.stub()
    return (
      <button onClick={onClick}>Button!</button>
    );
  }

  mount(<Comp />);

  cy.clickButtonWithText('Button!');
})

it('uses a custom command written in TypeScript checkbox', () => {
  const Comp2: React.FC = () => {
    const onSelect = cy.stub()
    const jsxElements = <>
      <input type="checkbox" id="chkOption" name="chkOption" onSelect={onSelect} />
      <label htmlFor="chkOption">Click Me!</label>
    </>
    return (
      jsxElements
    );
  }

  mount(<Comp2 />);
  
  cy.get("input").check();
})
