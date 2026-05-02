// Cadastrar um produto
// const você só atribui uma vez !
const produtos = [
    'Produto1',
    'Produto2',
    'Produto3',
    'Produto4',
    'Produto5'
];

export function retorneProdutos(indiceDoProduto) {
    return produtos.at(indiceDoProduto);
}

/*
Funcao que seja capaz de receber um produto,
inserir ele no vetor de produtos
o ultimo valor contido no vetor
exemplo: adicionarProduto('Produto6') -> ['Produto1', 'Produto2', 'Produto3', 'Produto4', 'Produto5', 'Produto6']
*/

export function adicionarProduto(novoProduto) {
    if (novoProduto == undefined || novoProduto === '') {
        throw new Error('Produto deve ser informado.');
    }

    produtos.push(novoProduto);
    return produtos.at(-1);
}
