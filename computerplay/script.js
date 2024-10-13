function computerPlay(){
    // opciones
    let options =["piedra", "papel", "tijera"];
    // seleccion random
    let randomIndex = Math.floor(Math.random() * options.length);
    // envia seleccion
    return options[randomIndex];


}
// funcion una ronda recibe ambas elecciones
function playRound(playerSelection, computerSelection){
    // 
    playerSelection.toLowerCase();
    // comparar opciones
    if (playerSelection === computerSelection){
        return "Es un empate.";
        
    } else if (
        (playerSelection === "piedra" && computerSelection === "tijera") ||
        (playerSelection === "tijera" && computerSelection === "papel") ||
        (playerSelection === "papel" && computerSelection === "piedra")
    ) {
        return `Ganaste! ${playerSelection} vence a ${computerSelection}. ` ;
    } else {
        return `Perdiste! ${computerSelection} vence a ${playerSelection}. ` ;
    }
}
// Juega 5 rondas
function game() {
    // bucle
    for (let i = 0; i < 5; i++) {
        // usuario entra seleccion
        let playerSelection = prompt("Elige: piedra, papel o tijera");
        // eleccion random
        let computerSelection = computerPlay();
        // juego y muestra resultado
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(`Ronda ${i + 1}: ${roundResult}`);
    }
}
// llamar a primera fumcion
game(); 