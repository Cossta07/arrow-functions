/*Questão 03: Escreva uma arrow function chamada somaArray que recebe um array 
de números como parâmetro e retorna a soma de todos os elementos desse array.*/
const soma = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
};

const numeros = [41, 32, 33, 24, 15];
console.log(soma(numeros));