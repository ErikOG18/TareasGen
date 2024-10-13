// Función de resistencias en serie
function sumResistance(resistances) {
    // convertir todas las resistencias a sus valores absolutos
    const absoluteValues = resistances
    .map(Math.abs);

    // suma de los valores absolutos
    const totalResistance = absoluteValues.reduce((sum, current) => sum + current, 0);

    // Devolvemos el resultado, añadiendo "ohms"
    return `${totalResistance} ohms`;
}

// Pedimos al usuario que ingrese los valores de resistencias separados por coma
let userInput = prompt("Ingresa los valores de las resistencias separadas por coma (ej: 3, 5, -7, 8)");

// Convertimos el input a un array de números
let resistancesArray = userInput.split(",").map(Number);

// Llamamos a la función sumResistance y mostramos el resultado en la consola
console.log(sumResistance(resistancesArray));
