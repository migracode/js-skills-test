/*
5 - Contar Ocorrências de Caracteres

Dada uma string, conte quantas vezes cada caractere aparece nela.
Por exemplo, para a string "banana", o resultado deve ser { b: 1, a: 3, n: 2 }.
*/

export function countChars(str) {
  const count = {};

  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  return count;
}
