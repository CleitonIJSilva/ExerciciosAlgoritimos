const prompt = require('prompt-sync')();

const pi = 3.14159

let raio = prompt("Digite o raio: ")  // prompt para abrir uma pergunta 

let altura=   prompt("Digite a altura: ")

let volume = pi * raio ** 2 * altura;

console.log(volume)
