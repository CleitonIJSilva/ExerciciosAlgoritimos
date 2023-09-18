const prompt = require('prompt-sync')();

let a = prompt("Digite um numero: ")

let b = prompt("Digite o segundo numero: ")
 
aux = a
a = b
b = aux
console.log (a,b)