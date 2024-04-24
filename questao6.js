/*
Questão 06: Escreva uma arrow function chamada ehPrimo que recebe um número 
como parâmetro e retorna true se o número for primo e false se não for.
*/

const ehPrimo = (numero) => {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
};



console.log(ehPrimo(103)); ;