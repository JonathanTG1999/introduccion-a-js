function probarCalcularSalarioMensual() {
  console.assert(
    calcularSalarioMensual(1200000) === 100000,
    "Calcular Salario Mensual no divide el numero recibido en 12 meses correctamente"
  );
}

probarCalcularSalarioMensual();
