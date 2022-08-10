"use strict";
//TODO string
let sobrenome = "Dematto";
console.log(sobrenome);
let primeiroNome = "Kalu";
//TODO numbers
let idade = 27;
console.log(idade);
//TODO boolean
let possuiHobbies = false;
console.log(possuiHobbies);
//TODO atribuindo tipos explicitos
let minhaIdade = 1;
minhaIdade = 35;
let idadeTestando = 22;
idadeTestando = "35";
console.log(minhaIdade);
console.log(idadeTestando);
let typeTest;
console.log(typeof typeTest);
//TODO Arrays
let hobbies = ["Cozinhar", "Ler", "Estudar"];
console.log(hobbies[0]);
hobbies = [100, 200];
console.log(hobbies);
//TODO Tuplas
//TODO É um array com tipo e uma quantidade pre-definida
let endereco = ["Edgar Facó", 99]; // definindo array do tipo tupla
console.log(endereco);
// endereco = [2, 2] não é possivel declarar 2 numbers pq fere a tipagem anterior de tupla
// endereco = ['edgar faco', 99, 199] não é possivel pois tem uma quantia de elementos maior que a declarada
//TODO Enums
//TODO Valores pre-definidos
var Cor;
(function (Cor) {
    Cor[Cor["Azul"] = 0] = "Azul";
    Cor[Cor["Vermelho"] = 1] = "Vermelho";
    Cor[Cor["Preto"] = 2] = "Preto";
})(Cor || (Cor = {}));
let minhaCor = Cor.Preto;
console.log(minhaCor);
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["success"] = 200] = "success";
    ErrorCodes[ErrorCodes["notFound"] = 404] = "notFound";
    ErrorCodes[ErrorCodes["serverError"] = 500] = "serverError";
})(ErrorCodes || (ErrorCodes = {}));
let succesResponse = ErrorCodes.success;
console.log(succesResponse);
//TODO any
let carro = "Ferrari";
carro = 200;
carro = {
    Modelo: "Ferrari",
    Ano: 2020,
};
console.log(carro);
//TODO funções
function retornaMeuNome() {
    //return minhaIdade; Exibe um erro, pois a função esta tipada como String
    return primeiroNome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
}
digaOi();
function multiplicar(num1, num2) {
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
//TODO tipo Função
let calculo; // define que a variavel calculo seja do tipo função
calculo = multiplicar;
console.log(calculo(5, 6));
//TODO Objetos
let usuario = {
    nome: "Kalu",
    idade: 35,
};
console.log(usuario);
usuario = {
    nome: "Peter",
    idade: 18,
};
console.log(usuario);
//TODO checando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log("É um number!");
}
else {
    console.log(typeof valor);
}
//TODO tipo never
//TODO Quer dizer que a função nunca vai retornar ou vai terminar com erro
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "Sabão",
    preco: 8,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa ter um nome!");
        }
        if (this.preco <= 0) {
            falha("Preco invalido!");
        }
    },
};
produto.validarProduto();
//TODO Valores opcionais com o tipo Null
let altura = 12;
//altura = null
let alturaOpcional = null;
const contato1 = {
    nome: "Kalu",
    tel1: "994017769",
    tel2: null,
};
console.log(contato1);
//# sourceMappingURL=tipos.js.map