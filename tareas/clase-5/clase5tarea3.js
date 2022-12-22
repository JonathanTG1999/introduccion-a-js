const $botoncalcularTiempo = document.querySelector(`#calcular-tiempo-total`)
const $botonagregarClases = document.querySelector(`#agregar-clases`)

$botonagregarClases.onclick = function(){
    const numeroClases = Number(document.querySelector(`#numero-clases`).value)
    if (numeroClases > 0 && numeroClases <= 10)
        agregarFormulario(numeroClases)
        else {
            alert("El numero de clases no existe, ingrese un numero valido del 1 al 10")
            return false
        }
}

function agregarFormulario(numeroClases){
    const $formulario = document.querySelector(`#formulario`)
    $formulario.innerHTML = ``
    for (i = 1; i <= numeroClases; i = i + 1){
        $formulario.innerHTML += `<form id="clase-${i}">
    <h3 class="clase">Clase ${i}</h3>
    <label for="horas">horas</label>
    <input type="number" name="horas" id="horas-clase${i}">
    <label for="minutos">minutos</label>
    <input type="number" name="minutos" id="minutos-clase${i}">
    <label for="segundos">segundos</label>
    <input type="number" name="segundos" id="segundos-clase${i}">
    </form> <br/>`;
    }
}