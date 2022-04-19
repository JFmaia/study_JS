/*
    Function constructor

    * expressão new
    * criar um novo objeto
    * this keyword
    * 
 */

// Esse é uma função construtora, boa pratica colocar a primeira letra da função em maiuscula!
function Person (name){
    this.name = name;
    this.walk = function(){
        return this.name + ' is walking';
    }
}
const mayk = new Person("Mayk");
const jose = new Person("José");
console.log(mayk.walk());
console.log(jose.walk());