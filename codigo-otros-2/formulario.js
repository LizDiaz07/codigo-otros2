/*  let formulario = document.querySelector("#form")

formulario.onsubmit = function(e) {
//aqui prevenimos el envio del formulario 
  e.preventDefault();
  //por buenas practicas se cambio el var por let 
  let n = formulario.elements[0]
  let e = formulario.elements[1]
  let na = formulario.elements[2]

  let nombre = n.value
  let edad = e.value

  let i = na.selectedIndex
  let nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

let lista = document.getElementById("lista-de-invitados")

let elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
} */

// Seleccionamos los campos por su ID en lugar de usar índices
var nombreInput = document.getElementById("name");  // Nombre
var edadInput = document.getElementById("age");    // Edad
var nacionalidadSelect = document.getElementById("nationality"); // Nacionalidad

formulario.onsubmit = function (e) {
  // Prevenir el envío del formulario
  e.preventDefault();

  // Obtenemos los valores directamente de los elementos
  var nombre = nombreInput.value;
  var edad = edadInput.value;
  var nacionalidad = nacionalidadSelect.value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  // Validación
  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  } else {
    nombreInput.classList.remove("error");
  }

  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  } else {
    edadInput.classList.remove("error");
  }

  // Si la validación es exitosa, agregamos el invitado
  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

function agregarInvitado(nombre, edad, nacionalidad) {
  var nacionalidades = {
    "ar": "Argentina",
    "mx": "Mexicana",
    "vnzl": "Venezolana",
    "per": "Peruana"
  };

  var lista = document.getElementById("lista-de-invitados");
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  // Crear elementos dinámicos para mostrar los datos del invitado
  function crearElemento(descripcion, valor) {
    var span = document.createElement("span");
    var input = document.createElement("input");
    var espacio = document.createElement("br");
    span.textContent = descripcion + ": ";
    input.value = valor;
    input.disabled = true;
    elementoLista.appendChild(span);
    elementoLista.appendChild(input);
    elementoLista.appendChild(espacio);
  }

  // Usamos el objeto para obtener el nombre de la nacionalidad
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidades[nacionalidad] || nacionalidad);

  // Botón para borrar invitado
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  // Funcionalidad para eliminar el invitado
  botonBorrar.onclick = function () {
    elementoLista.remove();
  };
}
