import {
    retorneNomeLivroById
} from '../src/livros.js';
import assert from 'node:assert';

describe('Teste da função retorneNomeLivroById', () => {
    it('Deve retornar o nome do livro correto para um ID válido', () => {
        // Arrange
        const idDolivro = 3;
        const nomeEsperado = 'Harry Potter e a Pedra Filosofal';

        // Act
        const nomeRetornado = retorneNomeLivroById(idDolivro);

        // Assert
        assert.equal(nomeRetornado, nomeEsperado);
    });

    it('Deve retornar "ID inválido" para um ID negativo', () => {
        // Arrange
        const idDolivro = -1;
        const mensagemEsperada = 'ID inválido.';
        // Act
        let mensagemRetornada;
        try {
            mensagemRetornada = retorneNomeLivroById(idDolivro);
        } catch (error) {
            mensagemRetornada = error.message;
        }
        // Assert
        assert.equal(mensagemRetornada, mensagemEsperada);
    });
    
});