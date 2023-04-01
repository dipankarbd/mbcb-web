const baseApiUrl = Cypress.env('baseApi');

describe('showing balance', () => {
  const data = [
    {
      id: 1,
      description: 'transaction 1',
      amount: 1000,
      date: '2022-01-06T00:00:00.000Z',
    },
    {
      id: 2,
      description: 'transaction 2',
      amount: 57,
      date: '2022-01-15T00:00:00.000Z',
    },
    {
      id: 3,
      description: 'transaction 3',
      amount: 214,
      date: '2022-01-23T00:00:00.000Z',
    },
    {
      id: 4,
      description: 'transaction 4',
      amount: 708,
      date: '2022-01-30T00:00:00.000Z',
    },
    {
      id: 5,
      description: 'transaction 5',
      amount: 823,
      date: '2022-02-06T00:00:00.000Z',
    },
    {
      id: 6,
      description: 'transaction 6',
      amount: 789,
      date: '2022-02-15T00:00:00.000Z',
    },
    {
      id: 7,
      description: 'transaction 7',
      amount: 275,
      date: '2022-02-22T00:00:00.000Z',
    },
    {
      id: 8,
      description: 'transaction 8',
      amount: -116,
      date: '2022-03-03T00:00:00.000Z',
    },
    {
      id: 9,
      description: 'transaction 9',
      amount: 559,
      date: '2022-03-09T00:00:00.000Z',
    },
    {
      id: 10,
      description: 'transaction 10',
      amount: 674,
      date: '2022-03-15T00:00:00.000Z',
    },
    {
      id: 11,
      description: 'transaction 11',
      amount: 396,
      date: '2022-03-21T00:00:00.000Z',
    },
    {
      id: 12,
      description: 'transaction 12',
      amount: 784,
      date: '2022-03-29T00:00:00.000Z',
    },
    {
      id: 13,
      description: 'transaction 13',
      amount: 713,
      date: '2022-04-03T00:00:00.000Z',
    },
    {
      id: 14,
      description: 'transaction 14',
      amount: 325,
      date: '2022-04-11T00:00:00.000Z',
    },
    {
      id: 15,
      description: 'transaction 15',
      amount: 894,
      date: '2022-04-19T00:00:00.000Z',
    },
    {
      id: 16,
      description: 'transaction 16',
      amount: -666,
      date: '2022-04-25T00:00:00.000Z',
    },
    {
      id: 17,
      description: 'transaction 17',
      amount: 795,
      date: '2022-05-02T00:00:00.000Z',
    },
    {
      id: 18,
      description: 'transaction 18',
      amount: 451,
      date: '2022-05-11T00:00:00.000Z',
    },
    {
      id: 19,
      description: 'transaction 19',
      amount: 835,
      date: '2022-05-20T00:00:00.000Z',
    },
    {
      id: 20,
      description: 'transaction 20',
      amount: 521,
      date: '2022-05-26T00:00:00.000Z',
    },
  ];

  it('shows fetch data from server and calculates balance', () => {
    cy.intercept('GET', `${baseApiUrl}/transactions`, data);

    cy.visit('/');

    cy.contains('10031');
    cy.contains('January 2022');
    cy.contains('3118.29');
    cy.contains('May 2022');
    cy.contains('8715.81');
  });

  it('shows error', () => {
    cy.intercept('GET', `${baseApiUrl}/transactions`, { statusCode: 500 });

    cy.visit('/');

    cy.contains('request failed with status code 500', { matchCase: false });
  });

  it('does not show error when there is no transaction', () => {
    cy.intercept('GET', `${baseApiUrl}/transactions`, []).as('getTransactions');

    cy.visit('/');

    cy.wait('@getTransactions').then(() => {
      cy.contains('error', { matchCase: false }).should('not.exist');
    });
  });
});
