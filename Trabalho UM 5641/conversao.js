let a = parseFloat (prompt ("Insira o valor em Dólar"))
let moeda = prompt ("Você quer em Real ou Euro?")
let conversaoReal = a * 4.94
let conversaoEuro = a * 0.93
if (moeda === "euro") {
    alert(conversaoEuro);
} else if (moeda === "real"){
    alert(conversaoReal);
}
