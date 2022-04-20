// Manipulando Strings e Array

/*
    Separe um texto que contem espaços, em um novo array onde cada texto
    é uma posição do array. Depois disso, transforme cada array em um texto e onde eram espaços 
    coloque _.
 */

let pharse = "O rato roeu a roupa do rei de Roma";
// Separando em array
let myArray = pharse.split(" ");
console.log(myArray);
// Transformando o array em testo de novo, usando 'join' será necessário colocar o separador que foi escolhido o '_' .
let pharseWith = myArray.join("_");
console.log(pharseWith);