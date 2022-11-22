describe('empty spec', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1366, 768)
  })
  it('passes', () => {
    cy.visit('https://noggin.io')
  })
  
})