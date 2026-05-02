const livros = [
    {
        id: 1,
        titulo: 'O Senhor dos Anéis',
        tema: 'Aventura',
        preco: 30.00
    },
    {
        id: 2,
        titulo: 'O Hobbit',
        tema: 'Aventura',
        preco: 25.00
    },
    {
        id: 3,
        titulo: 'Harry Potter e a Pedra Filosofal',
        tema: 'Fantasia',
        preco: 20.00
    },
    {  
        id: 4,
        titulo: 'O Código Da Vinci',
        tema: 'Mistério',
        preco: 15.00
    },
    {
        id: 5,           
        titulo: 'A Guerra dos Tronos',
        tema: 'Fantasia',
        preco: 35.00
    }
]

export function retorneNomeLivroById(idDolivro) {
    if (idDolivro < 0 || !idDolivro)  {
        throw new Error('ID inválido.');
    }

    for (let i = 0; i < livros.length; i++) {
        if (livros[i].id === idDolivro) {
            return livros[i].titulo;
        }
    }

    return 'Livro não encontrado.';
}
