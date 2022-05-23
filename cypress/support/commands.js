// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************

/* eslint-disable no-undef */

//https://stackoverflow.com/questions/53814647/how-can-i-alias-specific-graphql-requests-in-cypress
Cypress.Commands.add('waitForGraph', operationName => {
  const GRAPH_URL = '/graphql';
  cy.route('POST', GRAPH_URL).as('graphqlRequest');
  //This will capture every request
  return cy.wait('@graphqlRequest').then(({request}) => {
    // If the captured request doesn't match the operation name of your query
    // it will wait again for the next one until it gets matched.
    if (request.body.operationName !== operationName) {
      return cy.waitForGraph(operationName);
    }
  });
});

Cypress.Commands.add('login', (username, password) => {
  const query = `
   mutation retrieveToken($username: String!, $password: String!) {
    retrieveToken(username: $username, password: $password) {
      token
    }
  }
`;
  cy.request({
    method: 'POST',
    url: 'graphql', // graphql endpoint
    body: {
      query,
      variables: {
        username,
        password,
      },
    },
  }).then(res => {
    if (res.body.data.retrieveToken.token) {
      cy.setCookie('access_token', res.body.data.retrieveToken.token);
    }
  });
});
