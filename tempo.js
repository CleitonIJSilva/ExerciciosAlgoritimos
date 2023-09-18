const prompt = require('prompt-sync')();

let velocidade = prompt("Digite a velocidade: ")  // prompt para abrir uma pergunta 

let tempo =   prompt("Digite o Tempo: ")

let distancia = tempo * velocidade;

let litros = distancia /12;


console.log(distancia,litros)

