// l'utente inserisce un numero
let  numberOne = parseFloat(prompt("Inserisci un numero")) ;
console.log(numberOne)
// l'utente inserisce un numero
let numberTwo = parseFloat(prompt("Inserisci un numero"));
console.log(numberTwo)
// controllo qualè il numero maggiore 
if (numberOne > numberTwo) {
    console.log("il numero maggiore è : " + numberOne);
}else if (numberTwo > numberOne){
    console.log("il numero maggiore è : " + numberTwo);
}