// Throw = disparar ou lançar erro

function sayMyName(name =  ''){
    if(name === ''){
        throw new Error("Nome é obrigatório");
    }

    console.log("Depois do erro");
}

// try...catch = tentar pegar o erro

try{
    sayMyName();
} catch(error){
    console.log(error);
}

// Se NÃO for utilizado try...catch, o throw é utilizado de toda forma mas navegador vai tratar o erro e a aplicação o fluxo para total.



