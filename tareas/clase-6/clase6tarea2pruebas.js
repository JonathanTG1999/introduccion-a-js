function probarconseguirSalarioMayor() {
  console.assert(
    conseguirSalarioMayor([50000, 150000, 175000, 200000]) === 200000,
    "conseguirSalarioMayor() no calcula correctamente el salario mas alto entre los salarios dados"
  );
}

function probarconseguirSalarioMenor() {
  console.assert(
    conseguirSalarioMenor([50000, 150000, 175000, 200000]) === 50000,
    "conseguirSalarioMenor() no calcula correctamente el salario mas bajo entre los salarios dados"
  );
}

function probarconseguirSalarioPromedio() {
  console.assert(
    conseguirSalarioPromedio([50000, 150000, 175000, 200000]) === 143750,
    "conseguirSalarioPromedio() no calcula correctamente el salario promedio entre los salarios dados"
  );
}
