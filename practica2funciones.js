function evalua() {
    var cadena = document.getElementById("cadena").value;
    var parrafo = document.getElementById("parrafo");

    if (/[a-z]/.test(cadena) && /[A-Z]/.test(cadena)) {
        parrafo.textContent = "La cadena contiene mayúsculas y minúsculas.";
    } else if (/[a-z]/.test(cadena)) {
        parrafo.textContent = "La cadena contiene solo minúsculas.";
    } else if (/[A-Z]/.test(cadena)) {
        parrafo.textContent = "La cadena contiene solo mayúsculas.";
    } else {
        parrafo.textContent = "La cadena no contiene letras.";
    }
}
