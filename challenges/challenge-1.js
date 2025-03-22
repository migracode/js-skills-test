/*
1 - Somar Dígitos de um Número

Implemente uma função que receba um número inteiro e retorne a soma de seus dígitos.
Por exemplo, dado o número 543, o retorno deve ser 5 + 4 + 3 = 12.
*/

export function sumDigits(num) {
  const numStr = num.toString().split('');
  const sum = numStr.reduce((a, b) => a + parseInt(b), 0);
  return sum;
}
