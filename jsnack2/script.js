
let  textOne = prompt("Inserisci una parola") ;
console.log(textOne)

let textTwo = prompt("Inserisci una parola");
console.log(textTwo)

if (textOne.length < textTwo.length) {
    console.log( textTwo +" " + textOne);
}else if ( textTwo < textOne){
    console.log(textOne + " " + textTwo);
}