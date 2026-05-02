import { retorneProdutos, adicionarProduto } from '../src/gestaoProdutos.js';
import assert from 'node:assert';

describe('Teste da função retorneProdutos', () => {
    it('Deve retornar o produto correto para um índice válido', () => {
        // Arrange
        const indiceDoProduto = 2;

        // Act
        const produto = retorneProdutos(indiceDoProduto);

        // Assert
        assert.equal(produto, 'Produto3');
    });

    it('Adicionar produto e validar que ele foi adicionado', () => {
        const novoProduto = 'Produto6';
        const produtoAdicionado = adicionarProduto(novoProduto);
        assert.equal(produtoAdicionado, 'Produto6');
    })

    it('Adicionar produto sem informar o nome do produto deve lançar um erro', () => {
        const novoProduto = '';
        assert.throws(() => adicionarProduto(novoProduto), {
            message: 'Produto deve ser informado.'
        });
    });
});