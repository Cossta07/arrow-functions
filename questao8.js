/*
 Escreva uma arrow function chamada ehPalindromo que recebe uma 
string como parâmetro e retorna true se a string for um palíndromo (ou seja, se ela 
pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita para 
a esquerda) e false caso contrário.  */
const ehPalindromo = (string) => {
  
    const strLimpa = string.replace(/\v/g, '').toLowerCase();
    
    
    return strLimpa === strLimpa.split('').reverse().join('');
  };
  
  
  console.log(ehPalindromo("arara"));
  console.log(ehPalindromo("ave")); 
  console.log(ehPalindromo("slc")); ;