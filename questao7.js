/*Escreva uma arrow function chamada contaLetras que recebe uma 
string como parâmetro e retorna um objeto contendo a contagem de cada letra 
presente na string*/
const contaLetras = (string) => {
    const contagem = {};
  
    for (let i = 0; i < string.length; i++) {
      const letra = string[i];
      contagem[letra] = (contagem[letra] || 0) + 1;
    }
  
    
    const numeros = Object.values(contagem);
  
    return numeros;
  };
  
  const resultado = contaLetras("salve");
  console.log(resultado); ;