let array
console.log('a. ', array)
// a.  undefined

array = null
console.log('b. ', array)
// b. null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// c. 11
let i = 0
console.log('d. ', array[i])
// d. 0
array[i+1] = 19
console.log('e. ', array)
// e. 
const valor = array[i+6]
console.log('f. ', valor)
// f. 


//EXERCICIO 2
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// FRASE "FRISE DO USUIRIO" 15

//EXERCICIO 3
// REPOSTA 25