// Comando para registrar un usuario nuevo (Caso 1)
Cypress.Commands.add('registrarUsuario', (nombre, apellido, email, celular, dni, password) => {
    // REEMPLAZA esta URL con la URL real de la página de registro de Ticketazo
    cy.visit('URL_DEL_REGISTRO'); 
    
    // Rellenar campos del formulario (ajusta los selectores '#...' según la página)
    cy.get('#inputNombre').type(nombre);
    cy.get('#inputApellido').type(apellido);
    cy.get('#inputEmail').type(email);
    cy.get('#inputCelular').type(celular);
    cy.get('#inputDNI').type(dni);
    cy.get('#inputPassword').type(password);
    cy.get('#inputConfirmPassword').type(password); 
    
    cy.get('button[type="submit"]').click(); // Enviar formulario
});

// Comando para validar errores (Usado en Casos 2 y 4)
Cypress.Commands.add('validarRegistroError', (nombre, apellido, email, celular, dni, password, mensajeError) => {
    // Reutiliza el comando principal para intentar registrar
    cy.registrarUsuario(nombre, apellido, email, celular, dni, password);
    
    // Aserción: verifica que el mensaje de error esté visible.
    cy.contains(mensajeError).should('be.visible');
});