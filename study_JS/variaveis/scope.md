# Scope

* Escopo determina a visibilidade de alguma variável no JS.

# Block Statement

``` js
// vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```

O bloco, também  criará um novo escopo. Chamamos de `block-scoped`

## var

**Exemplo**
``` js
// No javascript temos o conceito do hoisting
// var é global e poderá funcionar fora de um escopo de bloco e tbm local
console.log("> existe x antes do bloco?",x);
//local
{
    var x = 0
}
console.log("> existe x depois do bloco?",x);
```