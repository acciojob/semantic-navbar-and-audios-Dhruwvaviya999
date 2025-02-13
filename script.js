//your code here
cy.get('nav ul li a', { timeout: 5000 }).should('have.length', 3);