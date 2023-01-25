function calculoTotal(horas, minutos, segundos) {
  const tiempoTotalEnMinySeg = 60;
  let segundosFinales = 0;
  let minutosFinales = 0;
  let horasFinales = 0;
  if (segundos < tiempoTotalEnMinySeg) {
    segundosFinales = segundosFinales + segundos;
  } else if (segundos % tiempoTotalEnMinySeg === 0) {
    minutosFinales = minutosFinales + segundos / tiempoTotalEnMinySeg;
  } else {
    segundosFinales = segundosFinales + (segundos % tiempoTotalEnMinySeg);
    minutosFinales =
      minutos + (segundos - segundosFinales) / tiempoTotalEnMinySeg;
  }

  if (minutos < tiempoTotalEnMinySeg) {
    minutosFinales = minutos + minutosFinales;
  } else if (minutos % tiempoTotalEnMinySeg === 0) {
    horasFinales = horasFinales + minutos / tiempoTotalEnMinySeg;
  } else {
    minutosFinales = minutosFinales + (minutos % tiempoTotalEnMinySeg);
    horasFinales =
      horasFinales +
      (minutos - (minutos % tiempoTotalEnMinySeg)) / tiempoTotalEnMinySeg;
  }

  if (minutosFinales > tiempoTotalEnMinySeg) {
    minutosFinales = minutosFinales + (minutosFinales % tiempoTotalEnMinySeg);
    horasFinales =
      horasFinales +
      (minutosFinales - (minutosFinales % tiempoTotalEnMinySeg)) /
        tiempoTotalEnMinySeg;
  }

  horasFinales = horasFinales + horas;

  return `El tiempo total de los cursos es ${horasFinales} horas, ${minutosFinales} minutos, ${segundosFinales} segundos`;
}
