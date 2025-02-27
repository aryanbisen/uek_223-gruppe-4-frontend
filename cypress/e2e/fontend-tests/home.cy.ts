describe('Homepage', () => {
    beforeEach('visit homepage', () => {
        cy.visit('localhost:3000/home')
    })

    it('visits my events', () => {
        cy.contains("Your Events").click();
        cy.url().should('include', '/events')
    })
})
