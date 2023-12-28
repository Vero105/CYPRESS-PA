describe('Pruebas Katalon', () => {
    it('URL Valida', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.get('#combo_facility').select('Tokyo CURA Healthcare Center');
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_medicaid').check();
        cy.get('#txt_visit_date').type('2023-12-28');
        cy.get('#btn-book-appointment').click();
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    });

});
