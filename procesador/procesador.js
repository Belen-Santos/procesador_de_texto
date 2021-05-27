window.onload = function () {
    if (localStorage.miObjeto2) {
        var objeto = JSON.parse(localStorage.miObjeto2);
        console.log("mi objeto 2: ", objeto);
    }
    cargarTextos();
    document.getElementById("guardar").addEventListener('mousedown', guardar, false);
    document.getElementById("borrar").addEventListener('mousedown', borrar, false);
    document.getElementById("texto").addEventListener("keyup", cambiosGuardar, false);
    document.getElementById("negrita").addEventListener('mousedown', negrita, false);
    document.getElementById("cursiva").addEventListener('mousedown', cursiva, false);
    document.getElementById("subrayado").addEventListener('mousedown', subrayado, false);
    document.getElementById("color").addEventListener('mousedown', color, false);
    document.getElementById("nombreTextos").addEventListener('change', recuperaTexto, false);
}


function cargarTextos() {
    var select = document.getElementById("nombreTextos");
    select.innerHTML = "";
    for (var i in localStorage) {
        var ele = document.createElement("option");
        ele.innerHTML = i;
        ele.value = i;
        select.appendChild(ele);
    }
}


function recuperaTexto() {
    var nombre = this.value;
    document.getElementById("texto").innerHTML = localStorage.getItem(nombre);
    document.getElementById("nombre").value = nombre;
}


function guardar() {
    var nombre = document.getElementById("nombre").value;
    var contenido = document.getElementById("texto").innerHTML;
    console.log("contenido antes; ", contenido);
    while (nombre == "" || nombre == null) {
        nombre = prompt("Es indispensable para guardar que introduzca un nombre: ");
    }
    alert("¡¡Bien! El contenido ha sido guardado correctamente con el nombre " + nombre);
    console.log("contenido; ", contenido);
    localStorage.setItem(nombre, contenido);
    cargarTextos();
}


function cambiosGuardar() {
    var contenido = document.getElementById("texto").innerHTML;
    if (contenido == "" || contenido == "<br>") {
        document.getElementById("guardar").style.display = "none";
    } else {
        document.getElementById("guardar").style.display = "inline-block";
    }
}


function borrar() {
    var selec = document.getElementById("nombreTextos");
    var nombreDelTexto = selec.value;
    console.log("Elemento seleccionado: ", nombreDelTexto);
    if (nombreDelTexto != "") {
        selec.remove(nombreDelTexto);
        localStorage.removeItem(nombreDelTexto);
        cargarTextos();
        alert("El elemento " + nombreDelTexto + " se ha borrado correctamente.");
        document.getElementById("nombre").value = "";
        document.getElementById("texto").innerHTML = "";
        cargarTextos();
    } else {
        alert("No hay contenido que guardar");
    }
}


function negrita(e) {
    document.execCommand('bold', false, null);
    e.preventDefault();
}


function cursiva(e) {
    document.execCommand('italic', false, null);
    e.preventDefault();
}


function subrayado(e) {
    document.execCommand('underline', false, null);
    e.preventDefault();
}


function color(e) {
    var color = document.getElementById("colorin").value;
    document.execCommand('foreColor', false, color);
    e.preventDefault();
}