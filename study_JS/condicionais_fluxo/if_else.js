// if and else

// Exemplo medindo a temperatura

let temperature = 36.5;
let highTemperature= temperature >= 38;
let mediumTemperature= temperature < 37.5 && temperature >= 37;

if(mediumTemperature){
    console.log("Você está com febre");
}else if(highTemperature){
    console.log("Você está com febre grave");
}else{
    console.log("Você está bem");
}