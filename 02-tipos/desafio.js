"use strict";
let funcionario = {
    supervisores: ["Ana", "Fernando", "Joe"],
    batePonto(horario) {
        if (horario <= 8) {
            return "Ponto Normal";
        }
        else {
            return "Fora do Horário";
        }
    },
};
console.log(funcionario.supervisores);
console.log(funcionario.batePonto(8));
// funcionario = {}
// Union Types
let nota = 10; // permite definir dois tipos para a variavel nota
console.log(`Minha nota é ${nota}`);
nota = "10";
console.log(`Minha nota é ${nota}`);
