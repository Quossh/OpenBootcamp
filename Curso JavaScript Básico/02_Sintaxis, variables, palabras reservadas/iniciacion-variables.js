var variable;
let variableLet;

const constante = "Hola soy una constante";
console.log(constante);
// constante = "Adios"; // Nos da un error

var a = 1;
console.log(a);

a = 4;
console.log(a);

let b = 3;
console.log(b);

b = 5;
console.log(b);

// var -> Afecta a todo el código
// let -> Afecta solo al bloque donde se declara


var variable = "Hola soy una variable VAR";

for (var i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable";
}

console.log(variable);


let variableLet_ = "Hola soy una variable LET";

for (var i = 0; i < 3; i++) {
    let variableLet_ = "Soy la segunda variable LET";
}

console.log(variableLet_);

///////////////////////////////////////////

console.log(typeof variableLet_);   // typeof -> Muestra el tipo de variable es.