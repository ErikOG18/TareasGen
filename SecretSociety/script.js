// Function 
function generateSecretSociety() {
    // Prompt
    let userInput = prompt("Enter the names of the society members, separated by commas:");

    // valor
    if (userInput === null) {
        console.log("Input was canceled. Please reload the page to try again.");
        return; // Exit the function
    }

    // array nombres
    let namesArray = userInput.split(",").map(name => name.trim());

    // Tomar primer letra de cada nombre
    let firstLetters = namesArray.map(name => name.charAt(0).toUpperCase());

    // juntar letras
    let secretSocietyName = firstLetters.join("");

    // inprimir
    console.log("The secret society name is: " + secretSocietyName);
}

// llamar la funcion
generateSecretSociety();
