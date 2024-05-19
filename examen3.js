/**
 * Función para verificar si una cadena es un palíndromo.
 * @param {string} cadena - La cadena a evaluar.
 * @returns {string} - El resultado indicando si es un palíndromo o no.
 */
function palindromo(cadena) {
    // Inicializa el resultado con la frase original
    var resultado = "La frase \"" + cadena + "\" ";
    
    // Convierte la cadena a minúsculas para una comparación uniforme
    var cadenaOriginal = cadena.toLowerCase();
    
    // Divide la cadena en un array de caracteres, incluyendo espacios
    var letrasEspacios = cadenaOriginal.split("");
    
    // Elimina los espacios de la cadena
    var cadenaSinEspacios = "";
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }
    
    // Convierte la cadena sin espacios en un array de caracteres
    var letras = cadenaSinEspacios.split("");
    
    // Crea un array de caracteres en orden inverso
    var letrasReves = cadenaSinEspacios.split("").reverse();
    
    // Compara los caracteres de ambos arrays
    var iguales = true;
    for (var i in letras) {
        if (letras[i] != letrasReves[i]) {
            iguales = false;
            break;
        }
    }
    
    // Determina si la frase es un palíndromo
    if (iguales) {
        resultado += "es un palíndromo";
    } else {
        resultado += "no es un palíndromo";
    }
    
    return resultado;
}

/**
 * Función que se ejecuta al pulsar el botón para verificar la frase introducida.
 * Obtiene el valor del cuadro de texto, verifica si es un palíndromo y muestra el resultado.
 */
function checkPalindrome() {
    // Obtiene la frase del cuadro de texto
    var phrase = document.getElementById('phrase').value;
    
    // Verifica si la frase es un palíndromo
    var result = palindromo(phrase);
    
    // Muestra el resultado en el párrafo
    document.getElementById('result').textContent = result;
}
