document.querySelector("#calcular-salario-mensual").onclick = function (event) {
  const salarioAnual = Number(document.querySelector("#salario-anual").value);
  const salarioMensual = calcularSalarioMensual(salarioAnual);

  document.querySelector("#salario-mensual").value = salarioMensual;

  event.preventDefault();
};

function validarSalario(salario) {
  if (salario === 0) {
    return false;
  } else {
    return true;
  }
}
