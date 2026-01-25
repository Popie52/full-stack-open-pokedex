describe('Pokedex navigation', function() {
  it('can navigate to ivysaur page', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')  
  })
})
