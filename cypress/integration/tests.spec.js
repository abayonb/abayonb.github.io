/* eslint-disable no-undef */

describe('Infra', () => {
  beforeEach(() => {
    cy.clearCookies();
  });

  it('login command works', () => {
    cy.fixture('lookiero-fixtures.json').then(fixtures => {
      cy.login(fixtures.username, fixtures.password);
      cy.getCookie('access_token').should('exist');
    });
  });
});
