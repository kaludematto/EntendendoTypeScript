"use strict";
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: "Kalu Dematto",
    contaBancaria: contaBancaria,
    contatos: ["39762275", "994017769"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
