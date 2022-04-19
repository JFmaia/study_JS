// callback function

function sayMyName(name) {
    return name();
}

sayMyName(()=>{
    console.log("Estou em uma Callback");
});

// Callback nada mais é uma função sendo passada para outra função.