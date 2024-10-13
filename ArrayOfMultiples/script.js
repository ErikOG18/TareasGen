// Function 
function arrayMultiples(number, length) {
    // array vacio
    let multiplesArray = [];

    // bucle
    for (let i = 1; i <= length; i++) {
        multiplesArray.push(number * i); // enviar al array
    }

    // array resultante
    return multiplesArray;
}

// informacion usuario
function getUserInputAndGenerateMultiples() {
    // Prompt numero
    let number = parseInt(prompt("Enter a number:"), 10);
    
    // Prompt longitud
    let length = parseInt(prompt("Enter the length of the array:"), 10);
    
    // Validar
    if (isNaN(number) || isNaN(length) || length <= 0) {
        console.log("Please enter valid positive numbers for both prompts.");
        return;
    }
    
    // llamar y gaurdar resultado
    const result = arrayMultiples(number, length);
    console.log(`The array of multiples of ${number} with length ${length} is:`, result);
}

// llamar a la funcion

getUserInputAndGenerateMultiples();
``
