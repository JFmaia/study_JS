# Variáveis

* Nomes Simbólicos para receber algum valor
* Atalhos de código
* Indentificadores
* 3 palavras-chave reservadas para criar uma variável
    * var
    * let
    * const

## Exemplo:

``` html
    <script>
        // const os dados dentro dessa variavel não podem ser mudados.
        // var vem de variante o dado dentro dela pode variar.
        // let bem parecido com var.
        var clima = "Quente";
        // Reatribuindo valor da variável
        clima = "Frio";
        console.log(clima);
    </script>
``` 

> Resumo: Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou identificadores. Para criar uma variável, podemos usar uma das palavras reservadas: var, let e const, por exemplo: var clima = "quente", onde var é a palavra que simboliza a criação da variável, clima é o nome da variável, o sinal de igual denota que a variável está recebendo um valor e "quente" é a string que está sendo recebida. As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const não.

