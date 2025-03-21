/*
6 - Sistema de Reservas

Implemente uma função que, dado um array de reservas e uma nova reserva (cada reserva é representada por um intervalo de horas),
determine se a nova reserva pode ser feita sem sobreposição.
Por exemplo, se as reservas existentes forem [[1, 3], [4, 6]] e a nova reserva for [3, 5],
o retorno deve ser false, pois há sobreposição.
*/

export function canBookReservation(existingReservations, newReservation) {
  const [newStart, newEnd] = newReservation;

  for (const [start, end] of existingReservations) {
    if (!(newEnd <= start || newStart >= end)) {
      return false;
    }
  }

  return true;
}
