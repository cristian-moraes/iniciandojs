let peso = parseFloat (prompt("Qual seu peso?"))
let altura = parseFloat (prompt ("Qual a sua altura?"))
let imc = peso / (altura * altura)
if (peso < 18.4) { 
    console.log("Baixo peso")
    
}
else if (peso >= 18.5 && peso <= 24.9 ) { 
    console.log("Peso adequado")
    
}
else (peso > 25 && peso <= 29.9); {
    console.log("Sobre peso")
    
}
console.log("Seu imc é:", imc);