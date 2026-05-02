import { retorneProdutosDois, adicionarProdutoDois } from '../src/gestaoProdutos2.js';
import assert from 'node:assert';

describe('Teste da função retorneProdutosDois', () => {
    it('Deve retornar o produto correto para um índice válido', () => {
        // Arrange
        const indiceDoProduto = 2;

        // Act
        const produto = retorneProdutosDois(indiceDoProduto);

        // Assert
        assert.equal(produto, 'Controle');
    });

    it('Adicionar produto e validar que ele foi adicionado', () => {
        const novoProduto = { nome: 'Produto6', preco: 6.00, estoque: 60 };
        const produtoAdicionado = adicionarProdutoDois(novoProduto);
        assert.equal(produtoAdicionado, 'Produto6');
    })

    it('Adicionar produto sem informar o nome do produto deve lançar um erro', () => {
        const novoProduto = { nome: '', preco: 6.00, estoque: 60 };
        assert.throws(() => adicionarProdutoDois(novoProduto), {
            message: 'Nome do produto deve ser informado.'
        });
    });
});