// Desafio
/*
Criar um objeto funcionário com:
  - array de strings com os nomes dos supervisores
  - função de bater ponto que recebe a hora e retorna uma string
      - ponto normal (<= 8)
      - fora do horario (>8)
*/
// Alias
type Funcionario = {
  supervisores: string[];
  batePonto: (horas: number) => string;
};

let funcionario: Funcionario = {
  supervisores: ["Ana", "Fernando", "Joe"],
  batePonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto Normal";
    } else {
      return "Fora do Horário";
    }
  },
};

console.log(funcionario.supervisores);
console.log(funcionario.batePonto(8));

// funcionario = {}

// Union Types
let nota: number | string = 10; // permite definir dois tipos para a variavel nota
console.log(`Minha nota é ${nota}`);
nota = "10";
console.log(`Minha nota é ${nota}`);
