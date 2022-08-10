// Desafio
type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  },
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let correntista = {
  nome: "Kalu Dematto",
  contaBancaria: contaBancaria,
  contatos: ["39762275", "994017769"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
