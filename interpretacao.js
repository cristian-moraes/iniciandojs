// 1. 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
// a. false
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
// b. false
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
// c. true
console.log("d. ", typeof resultado)
// d. booleano

// 2.
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
// sera impresso, primeiroNumerosegundoNumero
// 3. resposta: ele tem que transformar a variavel em number para que seja feita a soma