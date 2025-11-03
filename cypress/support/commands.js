///<reference types="Cypress" />

// Custom command to close modal if it appears
Cypress.Commands.add('closeModalIfVisible', () => {
    cy.wait(3000)
    cy.get('body').then(($body) => {
        if ($body.find('div.modal-content').length > 0) {
          cy.get('div.modal-content').then(($modal) => {
            if ($modal.is(':visible')) {
              cy.get('button.fsTakeover--close').click()
            }
          });
        } else {
          cy.log('No modal appeared');
        }
      });
  });





