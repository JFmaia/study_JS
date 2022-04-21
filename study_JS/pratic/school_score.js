// Execicio de estudo de javascript
// Notas numericas para A, B, C, D, F.
function schoolMedia(nota){
    if(nota>=90 && nota<=100){
        return "A";
    }else if(nota>=80 && nota<=89){
        return "B";
    }else if(nota>=70 && nota<=79){
        return "C";
    }else if(nota>=60 && nota<=69){
        return "D";
    }else if(nota<60){
        return "F";
    }
}

let nota = 75.5;

console.log("Sua nota foi: " + schoolMedia(nota));