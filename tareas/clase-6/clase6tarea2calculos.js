function conseguirSalarioMayor(numbers) {
  let mayorNumero = numbers[0];
  for (i = 1; i < numbers.length; i = i + 1) {
    if (numbers[i] > mayorNumero) {
      mayorNumero = numbers[i];
    }
  }
  return mayorNumero;
}

function conseguirSalarioMenor(numbers) {
  let menorNumero = numbers[0];
  for (i = 1; i < numbers.length; i = i + 1) {
    if (numbers[i] < menorNumero) {
      menorNumero = numbers[0];
    }
  }
  return menorNumero;
}

function conseguirSalarioPromedio(numbers) {
  let promedio = 0;
  for (i = 0; i < numbers.length; i = i + 1) {
    promedio = promedio + numbers[i];
  }
  return promedio / numbers.length;
}

function conseguirSalarioPromedioMensual(salarioAnual) {
  const MesesEnUnAnio = 12;
  return salarioAnual / MesesEnUnAnio;
}
