// Exemplo onde o nome do parametro e igual ao nome da função
let subject = "create video";
// Quando vc passa parâmetro para a função a variavel de fora com o mesmo nome não será mudada, pq seram consideradas duas variaveis diferentes.
function createThink(subject){
    subject= "study";
    return subject;
}

console.log(subject);
console.log(createThink(subject));