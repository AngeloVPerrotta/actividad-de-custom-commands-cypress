Cypress.Commands.add('registrarUsuario', (nombre, apellido, email, celular, dni, password) => {
    cy.visit('URL_DEL_REGISTRO'); 
    
    cy.get('#inputNombre').type(nombre);
    cy.get('#inputApellido').type(apellido);
    cy.get('#inputEmail').type(email);
    cy.get('#inputCelular').type(celular);
    cy.get('#inputDNI').type(dni);
    cy.get('#inputPassword').type(password);
    cy.get('#inputConfirmPassword').type(password); 
    
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('validarRegistroError', (nombre, apellido, email, celular, dni, password, mensajeError) => {
    cy.registrarUsuario(nombre, apellido, email, celular, dni, password);
    cy.contains(mensajeError).should('be.visible');
});