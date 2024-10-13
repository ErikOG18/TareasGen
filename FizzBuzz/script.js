// Funcion
function fizzbuzz(){
// Bucle 1 al 100
for (let i = 1; i <=100; i++){
// imprimir FizzBuzz si es divisible por 3 y 5
if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
}
// si es divisible solo por 3 imprimir "fizz"
else if (i % 3 === 0){
    console.log("Fizz");
}
// si es solo divisible por 5, imprimir "buzz"
else if (i % 5 === 0){
    console.log ("Buzz");
}
// si el numero no es divisible ni por 3 ni pr 5
else {
    console.log(i);
}


}
}
// llamar a la funcion
fizzbuzz();