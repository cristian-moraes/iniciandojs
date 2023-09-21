const nome = prompt ("Qual seu nome?")
const anoNasc = prompt ("Qual seu ano de nascimento?")
const anoAtual = prompt ("Em que ano estamos?")
const idade = anoAtual - anoNasc
const condicao = idade >= 18
console.log("Seu nome é: ", nome)
console.log("Idade: ", idade);
console.log("É maior de idade: ", condicao);
console.log("idade em 2050: ", 2050 - anoNasc);
