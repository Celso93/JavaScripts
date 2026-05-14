class ServicoDeTransferenciaBancaria {
  #transferencias // Propriedade Privada
  
  constructor() { // Primeiro método a ser executado quando usar a Classe
    this.#transferencias = [];
  }
  
  transferir(de, para, valor) { // Método
    this.#transferencias.push({
      remetente: de,
      destinatario: para,
      valorTransferencia: valor
    });
  }
  
  consultar() {
    return this.#transferencias;
  }
}

// variavel que está instaciando a classe (esta gerando a forma do objeto)
// Quando instaciado o construtor e sempre executado!
const servicoDeTransferencia = new ServicoDeTransferenciaBancaria();
console.log(servicoDeTransferencia.consultar());

servicoDeTransferencia.transferir('Wedney', 'Renata Campos', 160000);
console.log(servicoDeTransferencia.consultar());