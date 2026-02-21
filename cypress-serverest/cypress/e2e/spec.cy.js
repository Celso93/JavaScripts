describe('Login', () => {
  
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login')
  })
  
  it('Login invalido', () => {
    cy.get('input[data-testid=email]').type('email@invalido.com')
    cy.get('input[data-testid=senha]').type('senhaInvalida')
    cy.get('button[data-testid=entrar]').click()
    cy.get('div.alert.alert-secondary.alert-dismissible').should('be.visible').and('contain', 'Email e/ou senha inválidos')
  })

  it.only('Login com sucesso', () => {
    const email = `usuario_${Date.now()}@qa.com.br`
    let idUsuario

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: 'Usuário Teste API',
        email: email,
        password: 'teste',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body.message).to.equal('Cadastro realizado com sucesso')
      idUsuario = response.body._id
    })

    cy.get('input[data-testid=email]').type(email)
    cy.get('input[data-testid=senha]').type('teste')
    cy.get('button[data-testid=entrar]').click()
    cy.contains('h1', 'Bem Vindo Usuário Teste API').should('be.visible')

    cy.then(() => {
      cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/usuarios/${idUsuario}`
      }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('Registro excluído com sucesso')
      })
    })
  })

})