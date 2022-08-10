// string
let sobrenome = "Dematto";
console.log(sobrenome);
let primeiroNome: string = "Kalu";
// numbers
let idade = 27;
console.log(idade);

//boolean
let possuiHobbies = false;
console.log(possuiHobbies);

// atribuindo tipos explicitos
let minhaIdade: number = 1;
minhaIdade = 35;
let idadeTestando: any = 22;
idadeTestando = "35";
console.log(minhaIdade);
console.log(idadeTestando);
let typeTest: any;
console.log(typeof typeTest);

// Arrays

let hobbies: any[] = ["Cozinhar", "Ler", "Estudar"];
console.log(hobbies[0]);
hobbies = [100, 200];
console.log(hobbies);

// Tuplas
// É um array com tipo e uma quantidade pre-definida
let endereco: [string, number] = ["Edgar Facó", 99]; // definindo array do tipo tupla
console.log(endereco);
// endereco = [2, 2] não é possivel declarar 2 numbers pq fere a tipagem anterior de tupla
// endereco = ['edgar faco', 99, 199] não é possivel pois tem uma quantia de elementos maior que a declarada

// Enums
// Valores pre-definidos

enum Cor {
  Azul, // 0
  Vermelho, // 1
  Preto, // 2
}

let minhaCor: Cor = Cor.Preto;
console.log(minhaCor);

enum ErrorCodes {
  success = 200,
  notFound = 404,
  serverError = 500,
}
let succesResponse = ErrorCodes.success;
console.log(succesResponse);

// any
let carro: any = "Ferrari";
carro = 200;
carro = {
  Modelo: "Ferrari",
  Ano: 2020,
};

console.log(carro);

// funções

function retornaMeuNome(): string {
  //return minhaIdade; Exibe um erro, pois a função esta tipada como String
  return primeiroNome;
}

console.log(retornaMeuNome());

function digaOi(): void {
  console.log("Oi");
}

digaOi();

function multiplicar(num1: number, num2: number): number {
  return num1 * num2;
}

console.log(multiplicar(2, 2));

const teste = function () {
  console.log("1, 2, 3 testando...");
};

teste();

const teste2 = () => {
  console.log("3, 4, 5 testando...");
};

teste2();

// tipo Função
let calculo: (a: number, b: number) => number; // define que a variavel calculo seja do tipo função
calculo = multiplicar;
console.log(calculo(5, 6));

// Objetos
let usuario: { nome: string; idade: number } = {
  nome: "Kalu",
  idade: 35,
};

console.log(usuario);

usuario = {
  nome: "Peter",
  idade: 18,
};

console.log(usuario);
