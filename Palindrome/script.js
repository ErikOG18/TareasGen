// Function 
function isPalindrome() {
    // Step 1: Prompt 
    var input = prompt("Enter a word or sentence to check if it's a palindrome:");

    
    // remover no alfabeto y minusculas
    var normalizedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

    // invertir la entrada
    var reversedInput = normalizedInput.split('').reverse().join('');

    // comparar
    if (normalizedInput === reversedInput) {
        console.log(`"${input}" is a palindrome.`);
    } else {
        console.log(`"${input}" is not a palindrome.`);
    }
}

// llamar a la funcion
isPalindrome();