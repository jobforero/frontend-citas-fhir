describe('Pruebas E2E - Portal Citas Médicas HL7 FHIR', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5175');
  });

  it('1. Debe cargar la vista de Iniciar Sesión correctamente', () => {
    // Validar el encabezado del portal
    cy.contains('Citas Médicas FHIR').should('be.visible');
    
    // Validar el formulario de Login
    cy.contains('Iniciar Sesión').should('be.visible');
    cy.get('input').should('have.length.at.least', 1);
    cy.contains('button', 'Ingresar al Portal').should('be.visible');
  });

  it('2. Debe permitir la interacción con los campos de entrada', () => {
    cy.get('input').first().clear().type('8-123-4567');
    cy.contains('button', 'Ingresar al Portal').should('be.enabled');
  });
});