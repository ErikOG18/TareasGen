// Function
function findHighestNumber() {
    // Array
    var numbers = [];

    // bucle 10 numeros
    for (var i = 0; i < 10; i++) {
        var userInput = prompt("Enter number from 1 to 10:");
        var number = parseFloat(userInput);  // convertir a numero
        
        if (!isNaN(number)) {
            numbers.push(number);  // agregar numero al array
        } else {
            console.log("Invalid input. Please enter a valid number.");
           // deducir 1
        }
    }

    // encontrar el numero mas alto
    var highestNumber = Math.max(...numbers);

    //mostrar numeros en orden
    console.log("Numbers entered: " + numbers.join(", "));
    console.log("The highest number is: " + highestNumber);
}

// llamar a la funcion
findHighestNumber();