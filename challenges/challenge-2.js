/*
2 - Remover Duplicatas de um Array

Implemente uma função que receba um array e remova os números duplicados, mantendo a ordem de aparição.
Por exemplo, dado o array [1, 2, 3, 2, 1, 4], o retorno deve ser [1, 2, 3, 4].
*/

export function removeDuplicates(arr) {
  return [...new Set(arr)];
}
