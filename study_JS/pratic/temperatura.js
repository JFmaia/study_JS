// Execicio de estudo de javascript
// Temperatura

// transformDegree("50f");
function transformDegree (degree){
    const celsiusExist = degree.toUpperCase().includes("C");
    const fahrenheitExist = degree.toUpperCase().includes("F");

    // fluxo de error
    if(!celsiusExist && !fahrenheitExist){
        throw new Error("Grau não indentificado");
    }

    // fluxo ideal F -> C
    if(fahrenheitExist){
        let updateDegree = Number(degree.toUpperCase().replace("F", ""));
        let formula = (updateDegree)=>(updateDegree-32)*5/9;
        let degreeSign = "C";
        
        return formula(updateDegree) + degreeSign;

    // fluxo ideal C -> F
    }else{
        let updateDegree = Number(degree.toUpperCase().replace("C", ""));
        let formula = (updateDegree)=>(updateDegree*9/5)+32;
        let degreeSign = "F";
        
        return formula(updateDegree) + degreeSign;
    }

}

try{
    console.log(transformDegree("40C"));
    console.log(transformDegree("50F"));
    transformDegree("50Z");
}catch(e){
    console.log(e.message);
}