import { fakerPT_BR as faker } from '@faker-js/faker'

describe('Cadastro', () => {
  
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login')
  })

  it.only('Sucesso', () => {
    const nome = faker.person.fullName()
    const email = faker.internet.email()
    const password = faker.internet.password()
    let idUsuario

    cy.get('a[data-testid=cadastrar]').click()
    cy.get('input[data-testid=nome]').type(nome)
    cy.get('input[data-testid=email]').type(email)
    cy.get('input[data-testid=password]').type(password)
    cy.get('button[data-testid=cadastrar]').click()

    cy.contains('Cadastro realizado com sucesso').should('be.visible')

    // cy.then(() => {
    //   cy.request({
    //     method: 'DELETE',
    //     url: `https://serverest.dev/usuarios/${idUsuario}`
    //   }).then((response) => {
    //     expect(response.status).to.equal(200)
    //     expect(response.body.message).to.equal('Registro excluído com sucesso')
    //   })
    // })

  })

})