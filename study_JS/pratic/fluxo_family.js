// Execicio de estudo de javascript
// Fluxo de caixa familiar 

let familly = {
    receitas: [100,1000,2000,100,500],
    despesas: [10000,456,789,100,500],
}

function calcTotal (familly){
    let totalReceitas = 0;
    let totalDespesas = 0;
    
    for (let i = 0; i < familly.receitas.length; i++){
        totalReceitas += familly.receitas[i]
    }
    for (let i = 0; i < familly.despesas.length; i++){
        totalDespesas += familly.despesas[i]
    }
    
    if(totalDespesas > totalReceitas){
        return('Fluxo de caixa negativo: ' + (totalReceitas - totalDespesas));
    }else{
        return('Fluxo de caixa positivo: ' + (totalReceitas - totalDespesas));
    }

}

console.log(calcTotal(familly));