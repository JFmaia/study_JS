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

## let e const

* const e let são locais e só funcionam no escopo onde foi criado

**Exemplo**

``` js
    console.log("> existe y antes do bloco?", y);
    // let só existe dentro do scopo de {}
    {
        let y = 0;
    }
    console.log("> existe y depois do bloco?", y);
```

**Mas**

``` js
    // Dessa forma o y dentro do scopo de {} será atrivuido ao de fora, posi no let pode haver essa mudança.
    let y = 0;
    console.log("> existe y antes do bloco?", y);
    // let só existe dentro do scopo de {}
    {
        y = 1;
    }
    console.log("> existe y depois do bloco?", y);
```

**Já no const**

``` js
    // Já no const não, no const cada variavel tem seu scopo e so existe no seu scopo e não podem ser mudadas.
    const y = 0;
    console.log("> existe y antes do bloco?", y);
    // let só existe dentro do scopo de {}
    {
        const y = 1;
    }
    console.log("> existe y depois do bloco?", y);
```
