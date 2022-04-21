// Estrutura de repetição

// for

for(let i = 1; i <= 10; i++){
    // no dentro do for pode ser usado alguns controladores como break e continue.

    // O continuei é uma forma de ignorar.
    if(i === 5){
        continue;
    }
    // já o break é uma forma de parar.
    if(i === 8){
        break;
    }
    console.log(i);
}