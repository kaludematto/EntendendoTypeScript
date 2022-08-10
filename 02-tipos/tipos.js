"use strict";
// string
let sobrenome = "Dematto";
console.log(sobrenome);
// numbers
let idade = 27;
console.log(idade);
//boolean
let possuiHobbies = false;
console.log(possuiHobbies);
// atribuindo tipos explicitos
let minhaIdade = 1;
minhaIdade = 35;
let idadeTestando = 22;
idadeTestando = "35";
console.log(minhaIdade);
console.log(idadeTestando);
let typeTest;
console.log(typeof typeTest);
// Arrays
let hobbies = ["Cozinhar", "Ler", "Estudar"];
console.log(hobbies[0]);
hobbies = [100, 200];
console.log(hobbies);
// Tuplas
// É um array com tipo e uma quantidade pre-definida
let endereco = ["Edgar Facó", 99]; // definindo array do tipo tupla
console.log(endereco);
// endereco = [2, 2] não é possivel declarar 2 numbers pq fere a tipagem anterior de tupla
// endereco = ['edgar faco', 99, 199] não é possivel pois tem uma quantia de elementos maior que a declarada
// Enums
// Valores pre-definidos
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
// any
let carro = "Ferrari";
carro = 200;
carro = {
    Modelo: "Ferrari",
    Ano: 2020,
};
console.log(carro);
