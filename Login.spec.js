const url = "http://localhost/index.php"
Cypress.config('chromeWebSecurity', false); 
describe('template spec',() =>{
  it('TC1',()=>{
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('demo')
    cy.get('#login_password').type('demo')
    cy.get('.button').click()
    cy.wait(1000)
  })
  it('TC2',()=>{
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('demo')
    cy.get('.button').click()
    cy.wait(1000)
  })
  it('TC3',()=>{
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_password').type('demo')
    cy.get('.button').click()
    cy.wait(1000)
  })
  it('TC4',()=>{
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('Admin')
    cy.get('#login_password').type('Admin')
    cy.get('.button').click()
    cy.wait(1000)
  })
  it('TC5',()=>{
    cy.visit(url) 
    cy.get(':nth-child(3) > a > span').click()
    cy.get('#login_username').type('Admin')
    cy.get('#login_password').type('admin')
    cy.get('.button').click()
    cy.wait(1000)
  })
})