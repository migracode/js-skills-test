/*
4 - Validar Palíndromo

Implemente uma função que verifique se uma string é um palíndromo (lê-se da mesma forma de frente para trás).
Por exemplo, "arara" e "ana" são palíndromos, enquanto "banana" não é.
*/

export function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// export function isPalindrome(str) {
//   const reversedStr = str.split('').reverse().join('');
//   return str === reversedStr;
// }
