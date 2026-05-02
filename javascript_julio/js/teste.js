// Testando hoisting

// var nome = "teste";
// let nome2 = "teste2"; Melhor passar o let para o topo do código, para evitar o erro de referência (ReferenceError) devido ao hoisting do let, que não é inicializado até a linha onde é declarado.
console.log(nome); // undefined (devido ao hoisting do var)
// console.log(nome2)
var nome = "teste"; // hoisting aqui funciona, mas o valor é undefined até a linha onde é declarado

saudar(); // "Olá!" (hoisting de função funciona 100%)
function saudar() { 
    console.log("Olá!"); 
}

// let nome2 = "teste2";