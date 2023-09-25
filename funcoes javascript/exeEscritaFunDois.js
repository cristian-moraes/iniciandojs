// A

function somar(numero1, numero2) {
const soma = numero1 + numero2
const resultado = soma
return resultado;
}

somar();
console.log(resultado);

// B

function numeros(numero1, numero2) {
    return numero1 >= numero2
}

console.log(numeros);

// C

function isPar(numero) {
    return numero % 2 === 0;
}

console.log(isPar);

// D

let mensagem = prompt("insira uma mensagem")

function texto(mensagem) {
    return mensagem.length().toLowercase()
}
mensagem();