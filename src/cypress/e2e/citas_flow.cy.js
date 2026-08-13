describe('Pruebas E2E - Portal Citas Médicas HL7 FHIR', () => {

  beforeEach(() => {
    // Apunta al puerto activo donde Vite levanto la app (5175)
    cy.visit('http://localhost:5175');
  });

  it('1. Debe cargar la pagina principal y la barra de navegacion', () => {
    cy.get('nav').should('be.visible');
    cy.contains(/citas/i).should('exist');
  });

  it('2. Debe verificar la presencia del portal en pantalla', () => {
    cy.get('body').should('be.visible');
  });
});