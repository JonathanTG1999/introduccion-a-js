function probarValidarDatosIngresados() {
  console.assert(
    validarDatosIngresados("", "SegundoNombre", "Apellido", 24) === 0,
    "Validar Datos Ingresados no valido que el usuario haya ingresado su primer nombre"
  );

  console.assert(
    validarDatosIngresados("Nombre", "SegundoNombre", "", 24) === 0,
    "Validar Datos Ingresados no valido que el usuario haya ingresado su apellido"
  );

  console.assert(
    validarDatosIngresados("Nombre", "SegundoNombre", "Apellido", "") === 0,
    "Validar Datos Ingresados no valido que el usuario haya ingresado su edad"
  );

  console.assert(
    validarDatosIngresados("Nombre", "", "Apellido", 24) === 0,
    "Validar Datos Ingresados no valido que el usuario haya ingresado su segundo nombre"
  );

  console.assert(
    validarDatosIngresados("Nombre", "SegundoNombre", "Apellido", 24) === 2,
    "Validar Datos Ingresados no valido que el usuario haya ingresado todos sus datos"
  );
}

probarValidarDatosIngresados;
