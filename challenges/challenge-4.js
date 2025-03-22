/*
4 - Validar Palíndromo

Implemente uma função que verifique se uma string é um palíndromo (lê-se da mesma forma de frente para trás).
Por exemplo, "arara" e "ana" são palíndromos, enquanto "banana" não é.
*/

export function isPalindrome(str) {
  const reversStr = str.split("").reverse().join("");
  if (str === reversStr) {
    return true;
  }
  return false;
}
