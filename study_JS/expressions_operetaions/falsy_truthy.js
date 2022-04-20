// Falsy and Truthy

/* 
    Falsy 

    Quando um valor é considerado false em contexto onde um boolean é obrigatório
    (condicionais e loops).

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log("" ? "verdadeiro" : "falso"); // falso

/* 
    Truthy

    Quando um valor é considerado true em contexto onde um boolean é obrigatório
    (condicionais e loops).

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    infinity
    -infinity
*/

console.log(1 ? "verdadeiro" : "falso"); // true







