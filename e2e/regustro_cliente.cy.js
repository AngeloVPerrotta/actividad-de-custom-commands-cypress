describe('Registro de Cliente - Uso de Fixtures', () => {
  it('Debe completar y enviar el formulario de registro de cliente con datos de fixture', () => {
    cy.fixture('datos_cliente').then((datos) => {
      cy.visit('https://ticketazo.com.ar/auth/registerUser');

      cy.get('#nombres').clear().type(datos.nombres);
      cy.get('#apellido').clear().type(datos.apellido);

      cy.get('#telefono').clear().type(datos.telefono);
      cy.get('#dni').clear().type(datos.dni);

      cy.get('#provincia').clear().type(datos.provincia);
      cy.get('#localidad').clear().type(datos.localidad);

      cy.get('#fechaNacimiento').clear().type(datos.fechaNacimiento);

      const uniqueEmail = `${datos.email.split('@')[0]}+${Date.now()}@${datos.email.split('@')[1] || 'test.com'}`;
      cy.get('#email').clear().type(uniqueEmail);
      cy.get('#confirmEmail').clear().type(uniqueEmail);

      cy.get('#password').clear().type(datos.password);
      cy.get('#repeatPassword').clear().type(datos.password);

      cy.get('button').contains(/registrarse/i).click();
      cy.url().should((url) => {
        expect(url).to.match(/dashboard|\/home|\/auth\/confirm|\/perfil/);
      });
    });
  });
});
