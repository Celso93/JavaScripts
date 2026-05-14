import {realizarLogin} from '../src/login.js';
import assert from 'node:assert';

describe('Teste da função realizarLogin', () => {
    it('Deve retornar mensagem de sucesso para usuário válido', () => {
        // Arrange
        const login = 'roberto';
        const senha = '123456';
        const mensagemEsperada = 'Logado com sucesso, Roberto.';

        // Act
        const mensagemRetornada = realizarLogin(login, senha); 
        // Assert
        assert.equal(mensagemRetornada, mensagemEsperada);
    });
});