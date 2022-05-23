/* eslint-disable no-undef */

describe('Logging In', function() {
  beforeEach(function() {
    cy.getCookie('access_token').should('not.exist');
    cy.visit('user/login');
  });

  afterEach(function() {
    cy.clearCookies();
  });

  it('error message if login is clicked straight from visit', function() {
    // before we start, there should be no session cookie
    cy.get('[data-test=login-button]').click();
    cy.get('.text-field.margin-bottom--l > .text-helper').should('exist');
  });

  it('simple login works sets cookie and redirects', function() {
    cy.fixture('lookiero-fixtures.json').then(fixtures => {
      cy.get('[data-test=username-field]').type(fixtures.username);
      cy.get('[data-test=password-field]').type(fixtures.password);
      cy.get('[data-test=login-button]').click();
      cy.url().should('include', '/my-lk');
      cy.getCookie('access_token').should('exist');
    });
  });

  it('simple login failure doesnt set access token', function() {
    cy.fixture('lookiero-fixtures.json').then(fixtures => {
      cy.get('[data-test=username-field]').type(fixtures.username);
      cy.get('[data-test=password-field]').type('blabla');
      cy.get('[data-test=login-button]').click();
      cy.getCookie('access_token').should('not.exist');
    });
  });
});
