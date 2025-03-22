/*
6 - Sistema de Reservas

Implemente uma função que, dado um array de reservas e uma nova reserva (cada reserva é representada por um intervalo de horas),
determine se a nova reserva pode ser feita sem sobreposição.
Por exemplo, se as reservas existentes forem [[1, 3], [4, 6]] e a nova reserva for [3, 5],
o retorno deve ser false, pois há sobreposição.
*/

export function canBookReservation(existingReservations, newReservation) {
  const [start, end] = existingReservations;
  if (
    (newReservation[1] <= start[0]) ||
    (newReservation[0] >= end[1]) ||
    (newReservation[0] >= start[1] && newReservation[1] <= end[0])
  ) {
    return true;
  }
  return false;
}
