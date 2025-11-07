describe('Registro de Usuario - Tests Automatizados', () => {

    // Caso de uso 3: Redirección exitosa con datos nuevos
    it('Debe registrar un usuario y verificar la redirección a la página de inicio', () => {
        cy.registrarUsuario(
            'Juan', 
            'Perez', 
            'juan.perez' + Date.now() + '@test.com', 
            '1161112222', 
            '40000' + Date.now().toString().substring(8), 
            'ContrasenaSegura1'
        );
        cy.url().should('eq', 'URL_DE_LA_PAGINA_DE_INICIO'); 
    });
    
    // Caso de uso 2a: Email ya registrado
    it('Debe fallar el registro si el email ya está en la base de datos', () => {
        cy.validarRegistroError(
            'Email', 'Test', 'email@existente.com', '1122334455', '30000000', 'Password123', 
            'El correo electrónico ya se encuentra registrado.' 
        );
    });

    // Caso de uso 2b: DNI ya registrado
    it('Debe fallar el registro si el DNI ya está en uso', () => {
        cy.validarRegistroError(
            'DNI', 'Test', 'dni.nuevo' + Date.now() + '@test.com', '1122334455', '12345678', 'Password123', 
            'El DNI ingresado ya está en uso.' 
        );
    });

    // Caso de uso 4: Contraseña inválida
    it('Debe mostrar el error de requisitos mínimos para la contraseña', () => {
        cy.validarRegistroError(
            'Pass', 'Invalida', 'pass.invalida@test.com', '1122334455', '35555555', 'corta1', 
            'La contraseña debe tener al menos 8 caracteres y un número.' 
        );
    });
});