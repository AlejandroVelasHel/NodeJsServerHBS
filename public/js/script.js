const formularioLogin = document.querySelector('#loginBurdeos')

formularioLogin.addEventListener('submit', e =>{
    const validarEmail = /[a-zA-Z0-9\_\.]*@[a-zA-Z09]*\.[a-zA-Z]{3,}/
    e.preventDefault();
    const email = e.target.email.value
    const pass = e.target.pass.value
    console.log(e)
    try{
        if(email === '' || pass === ''){
            throw 'Todos los campos son obligatorios'
        }

        if(!validarEmail.test(email)){
            throw 'Formato de email invalido'
        }

        if(pass.length < 8){
            throw 'La clave debe tener mas de 8 digitos'
        }
        window.location = 'main'
    }catch(err){
        alert(err)
    }
})
const formularioproducto = document.querySelector('#productoform')

formularioproducto.addEventListener('submit', e =>{
    const validarNombre = /^[A-Z]+$/i
    e.preventDefault();
    const nombre = e.target.nombreP.value
    const id = e.target.idP.value
    let idP = document.querySelector('#idPv').value ;
    try{
        if(!validarNombre.test(nombre)){
            throw 'El nombre del prodcuto solo puede tener letras'
        }

        if(id === idP){
            throw 'El id no puede ser igual a un id existente'
        }

        if(pass.length < 8){
            throw 'La clave debe tener mas de 8 digitos'
        }
        window.location = 'main'
    }catch(err){
        alert(err)
    }
})


function validarFormulario() {
var numeroContrato = document.getElementById('numeroContrato').value;
var empresa = document.getElementById('empresa').value;
var fechaInicio = document.getElementById('fechaInicio').value;
var fechaFin = document.getElementById('fechaFin').value;
var frecuenciaPago = document.getElementById('frecuenciaPago').value;
var producto = document.getElementById('producto').value;
var medida = document.getElementById('medida').value;
var cantidad = document.getElementById('cantidad').value;
var total = document.getElementById('total').value;
var iva = document.getElementById('iva').value;


// Validar que ningún campo esté vacío
if (numeroContrato === '' || empresa === '' || fechaInicio === '' || fechaFin === '' || frecuenciaPago === '' || producto === '' || medida === '' || cantidad === '' || total === '' || iva === '') {
  alert('Por favor, completa todos los campos.');
  return false;
}


// Validar que Empresa solo permita ingresar letras
var letrasRegex = /^[a-zA-Z\s]*$/;
if (!letrasRegex.test(empresa)) {
  alert('El campo Empresa solo debe contener letras.');
  return false;
}

// Validar que Fecha inicio sea mayor a la fecha actual y menor a la Fecha fin
var fechaActual = new Date();
var fechaInicioValue = new Date(fechaInicio);
var fechaFinValue = new Date(fechaFin);

if (fechaInicioValue <= fechaActual) {
  alert('La Fecha inicio debe ser mayor a la fecha actual.');
  return false;
}

if (fechaInicioValue >= fechaFinValue) {
  alert('La Fecha inicio debe ser menor a la Fecha fin.');
  return false;
}

// Validar que Frecuencia de pago tenga 3 opciones diferentes (anual, mensual, semanal)
if (frecuenciaPago !== 'anual' && frecuenciaPago !== 'mensual' && frecuenciaPago !== 'semanal') {
  alert('Selecciona una opción válida para la Frecuencia de pago.');
  return false;
}

// Validar que Producto solo permita letras
if (!letrasRegex.test(producto)) {
  alert('El campo Producto solo debe contener letras.');
  return false;
}

// Validar que Medida sea en Kilogramos
if (isNaN(medida) || parseFloat(medida) <= 0) {
    alert('El campo Medida debe ser un número mayor a cero.');
    return false;
  }

// Validar que Cantidad sea un número mayor a cero
if (isNaN(cantidad) || cantidad <= 0) {
  alert('El campo Cantidad debe ser un número mayor a cero.');
  return false;
}

// Validar que Total sea un número mayor a cero
if (isNaN(total) || total <= 0) {
  alert('El campo Total debe ser un número mayor a cero.');
  return false;
}


alert('El contrato se ha registrado con éxito.');


// Si todas las validaciones pasaron, el formulario es válido
return true;


}
    function validarFormulariop() { 
    // Obtener los valores de los campos del formulario
    var nit = document.getElementById('nit').value;
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
  
    // Validar que los campos no estén vacíos
    if (nit === '' || nombre === '' || telefono === '') {
      alert('Por favor, complete todos los campos.');
      return false;
    }
  
    if (isNaN(nit)) {
      alert('El NIT debe ser un número válido.');
      return false;
    }
  
    // Validar que el Nombre solo contenga letras
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      alert('El Nombre solo puede contener letras.');
      return false;
    }
  
    // Validar que el Teléfono cumpla con el formato especificado
    if (!/^3\d{9}$/.test(telefono)) {
      alert('El Teléfono debe iniciar con el número 3 y contener 10 dígitos en total.');
      return false;
    }
  
    // Si todas las validaciones son exitosas, puedes realizar el envío del formulario
    // o ejecutar las acciones correspondientes para crear el proveedor en tu aplicación
  
    return true;
  }
  
  function validarFormulariopt() {
    // Obtener los valores de los campos del formulario
    var id = document.getElementById("id").value;
    var nombre = document.getElementById("nombre").value;
    var precio = document.getElementById("precio").value;
    var stockMinimo = document.getElementById("stockMinimo").value;
    var stockMaximo = document.getElementById("stockMaximo").value;
    var categoria = document.getElementById("categoria").value;
  
    // Validar que ningún campo esté vacío
    if (id === "" || nombre === "" || precio === "" || stockMinimo === "" || stockMaximo === "" || categoria === "") {
      alert("Por favor, completa todos los campos.");
      return false;
    }
  
  
    // Validar que Nombre solo contenga letras
    var letrasRegex = /^[A-Za-z]+$/;
    if (!nombre.match(letrasRegex)) {
      alert("El campo Nombre solo debe contener letras.");
      return false;
    }
  
    // Validar que Precio sea un número mayor a cero
    if (isNaN(precio) || precio <= 0) {
      alert("El campo Precio debe ser un número mayor a cero.");
      return false;
    }
  
    // Validar que Stock Mínimo sea un número mayor a cero
    if (isNaN(stockMinimo) || stockMinimo <= 0) {
      alert("El campo Stock Mínimo debe ser un número mayor a cero.");
      return false;
    }
  
    // Validar que Stock Máximo sea un número mayor a cero
    if (isNaN(stockMaximo) || stockMaximo <= 0) {
      alert("El campo Stock Máximo debe ser un número mayor a cero.");
      return false;
    }
  
    // Validar que Categoría solo contenga letras
    if (!categoria.match(letrasRegex)) {
      alert("El campo Categoría solo debe contener letras.");
      return false;
    }
  
    // Todas las validaciones pasaron, se puede enviar el formulario
    return true;
  }
  
  function validarFormularioe() {
    // Obtener los valores de los campos del formulario
    var id = document.getElementById('id').value;
    var fechaEmpaquetado = document.getElementById('fechaEmpaquetado').value;
    var fechaCompromiso = document.getElementById('fechaCompromiso').value;
    var producto = document.getElementById('producto').value;
    var cantidad = document.getElementById('cantidad').value;
    var medida = document.getElementById('medida').value;
    var costo = document.getElementById('costo').value;
  
    // Validar que ningún campo esté vacío
    if (id === '' || fechaEmpaquetado === '' || fechaCompromiso === '' || producto === '' || cantidad === '' || medida === '' || costo === '') {
      alert('Por favor, completa todos los campos.');
      return false;
    }
  
    // Validar que el ID sea solo números
    if (!esNumero(id)) {
      alert('El ID debe ser numérico.');
      return false;
    }
  
    // Validar que la Fecha de Empaquetado sea mayor a la fecha actual
    var fechaActual = new Date();
    var fechaEmpaquetadoDate = new Date(fechaEmpaquetado);
    if (fechaEmpaquetadoDate <= fechaActual) {
      alert('La Fecha de Empaquetado debe ser mayor a la fecha actual.');
      return false;
    }
  
    // Validar que la Fecha de Compromiso sea mayor a la Fecha de Empaquetado
    var fechaCompromisoDate = new Date(fechaCompromiso);
    if (fechaCompromisoDate <= fechaEmpaquetadoDate) {
      alert('La Fecha de Compromiso debe ser mayor a la Fecha de Empaquetado.');
      return false;
    }
  
    // Validar que el Producto sea solo letras
    if (!soloLetras(producto)) {
      alert('El Producto solo debe contener letras.');
      return false;
    }
  
    // Validar que la Cantidad sea un número mayor a 0
    if (!esNumero(cantidad) || cantidad <= 0) {
      alert('La Cantidad debe ser un número mayor a 0.');
      return false;
    }
  
    // Validar que la Medida sea un número mayor a 0
    if (!esNumero(medida) || medida <= 0) {
      alert('La Medida debe ser un número mayor a 0.');
      return false;
    }
  
    // Validar que el Costo sea un número mayor a 0
    if (!esNumero(costo) || costo <= 0) {
      alert('El Costo debe ser un número mayor a 0.');
      return false;
    }
  
    // Si todas las validaciones pasaron, se puede enviar el formulario
    return true;
  }
  
  // Función para verificar si un valor es numérico
  function esNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
  }
  
  // Función para verificar si un valor contiene solo letras
  function soloLetras(valor) {
    var patron = /^[a-zA-Z\s]+$/;
    return patron.test(valor);
  }
  
