// Estrutura de repetição

// for ... in

let person = {
    nome: 'José',
    age: 20,
    city: 'São Paulo'
}

// O for...in é utilizado para percorrer todas as propriedades de um objeto
for(let property in person){
    console.log(property+": "+person[property]);
}



