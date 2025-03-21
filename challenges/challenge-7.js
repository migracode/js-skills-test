/*
7 - Caixa Eletrônico

Implemente uma função que determine o número mínimo de cédulas para sacar uma determinada quantia, considerando notas de 100, 50, 20, 10 e 5.
Por exemplo, se a quantia a ser sacada for 275, o retorno deve ser { 100: 2, 50: 1, 20: 1, 5: 1 },
pois isso representa 2 notas de 100, 1 nota de 50, 1 nota de 20 e 1 nota de 5.
Caso o valor a ser sacado não possa ser atendido com as cédulas disponíveis, a função deve retornar a mensagem:
"Erro: valor não pode ser sacado."
*/

export function atmWithdrawal(amount) {
  const notes = [100, 50, 20, 10, 5];
  const result = {};

  for (const note of notes) {
    if (amount >= note) {
      const count = Math.floor(amount / note);
      result[note] = count;
      amount -= count * note;
    }
  }

  if (amount > 0) {
    return "Erro: valor não pode ser sacado.";
  }

  return result;
}
