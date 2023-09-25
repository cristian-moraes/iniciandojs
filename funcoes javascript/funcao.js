function calcularMedia(numero1, numero2) {
    const soma = numero1 + numero2;
    const media = soma / 2;
    return media;
}

let n1 = Number(prompt("Insira a nota"))
let n2 = Number(prompt("insira outra nota"))

const resultado = calcularMedia(n1, n2);

console.log(resultado);