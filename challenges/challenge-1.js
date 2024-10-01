/*
1 - Somar Dígitos de um Número

Implemente uma função que receba um número inteiro e retorne a soma de seus dígitos.
Por exemplo, dado o número 543, o retorno deve ser 5 + 4 + 3 = 12.
*/

export function sumDigits(num) {
  return String(num).split('').reduce((acc, digit) => acc + Number(digit), 0);
}
