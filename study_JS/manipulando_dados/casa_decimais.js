// Manipulando String e Números

// Transformando um número quebrado com duas casas decimais e trocar ponto por vírgula.

let number = 122.548966;
// colocando duas casas decimais e trocando ponto por virgula
console.log(number.toFixed(2).replace(".", ","));
// trocando ponto por vírgula tbm pode ser assim.
console.log(number.toLocaleString('pt-BR'));