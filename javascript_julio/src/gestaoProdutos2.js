// Cadastrar um produto
// Vetor com 3 items
// cada item e um objeto
// cada objeto tem 3 propriedades
// cada propriedade tem seu valor
const produtos = [
    {
        nome: 'Celular',
        preco: 1000.00,
        estoque: 10
    },
    {
        nome: 'Computador',
        preco: 2.00,
        estoque: 20, 
        perifericos: [
            { 
                nome: 'Mouse', 
                preco: 50.00, 
                estoque: 50 
            },
            
            { 
                nome: 'Teclado', 
                preco: 100.00, 
                estoque: 30 
            }
        ]
    },
    {
        nome: 'Controle',
        preco: 3.00,
        estoque: 30,
        cores: [ 'verde', 'vermelho', 'azul' ]
    }
]

export function retorneProdutosDois(indiceDoProduto) {
    return produtos.at(indiceDoProduto).nome;
}

/*
Funcao que seja capaz de receber um produto,
inserir ele no vetor de produtos
o ultimo valor contido no vetor
exemplo: adicionarProduto('Produto6') -> ['Produto1', 'Produto2', 'Produto3', 'Produto4', 'Produto5', 'Produto6']
*/

export function adicionarProdutoDois(novoProduto) {
    if (novoProduto.nome == undefined || novoProduto.nome === '') {
        throw new Error('Nome do produto deve ser informado.');
    }

    produtos.push(novoProduto);
    return produtos.at(-1).nome;
}
