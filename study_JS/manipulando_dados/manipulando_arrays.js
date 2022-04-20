// Manipulando Arrays

let techs = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'ReactJS', 'React Native'];

// * Adicionar um item no fim do array
techs.push("Dart");
// * Adicionar um item no início do array
techs.unshift("Python");
// * Remover do fim
techs.pop();
// * remover do começo
techs.shift();
// * pegar somente alguns elementos do array
// console.log(techs.slice(1, 4));
// * encontrar a posição de um elemento no array
let index =techs.indexOf('React Native');
// * remover um ou mais itens qualquer do array
techs.splice(index, 1);


console.log(techs);

