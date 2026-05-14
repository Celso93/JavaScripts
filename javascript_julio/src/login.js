
const usuarios = [
    {
        nome: 'Roberto',
        login: 'roberto',
        senha: '123456'
    },
    {
        nome: 'Maria',
        login: 'maria',
        senha: '123456'
    }
];
    

export function realizarLogin(login, senha) {
    let encontrado = 'Usuário não encontrado.';

    usuarios.forEach(function(usuario){
        if (usuario.login == login && usuario.senha == senha) {
            encontrado = `Logado com sucesso, ${usuario.nome}.`;
        }
    });

    return encontrado;
}

console.log(realizarLogin('roberto', '123456')); // Logado com sucesso, Roberto.
console.log(realizarLogin('maria', '123456')); // Logado com sucesso, Maria.
console.log(realizarLogin('joao', '123456')); // Usuário não encontrado.