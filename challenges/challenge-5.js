/*
5 - Contar Ocorrências de Caracteres

Dada uma string, conte quantas vezes cada caractere aparece nela.
Por exemplo, para a string "banana", o resultado deve ser { b: 1, a: 3, n: 2 }.
*/

export function countChars(str) {
  const result = {};
  for (let i of str) {
    if (result[i]) {
      result[i]++;
    } else {
      result[i] = 1;
    }
  }
  return result;
}
