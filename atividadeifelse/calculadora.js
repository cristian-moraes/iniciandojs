let numero = Number (prompt("Insira um número"))
let numb1 = Number (prompt("Insira outro número"))
let operacao = prompt("Você quer? +, -, *, /")
if (operacao === "+"  ) {
    let soma = numero + numb1
    alert(`Resuldado da soma` `${soma}`)
} else if (operacao === "-") {
    let subtracao = numero - numb1
    alert(`Resuldado da subtração` `${subtracao}`)
}else if (operacao === "*") {
    let multiplicar = numero * numb1
    alert(`Resuldado da multiplicação` `${multiplicar}`)
}else if (operacao === "/") {
    let dividir = numero / numb1
    alert(`Resultado da divisão` `${dividir}`)
}