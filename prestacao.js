const prompt = require('prompt-sync')();

const pi = 3.14159

let valor = prompt("Digite o valor: ")  // prompt para abrir uma pergunta 

let taxa=   prompt("Digite a taxa: ")

let tempo=   prompt("Digite o tempo ")

//let prestacao=   prompt("Digite a prestação: ")

let prestacao =  valor + (valor*(taxa/100)*tempo)

console.log(prestacao)
