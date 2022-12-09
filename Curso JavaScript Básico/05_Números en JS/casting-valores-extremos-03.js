// Operador .valueOf() - Obtener valores numéricos a partri de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());


// NaN (Not a Number) - Infinity
let n = Number('adios');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador / divisor_2);


// Cómo convertir los strings a valores numéricos con Number, parseInt y parseFloat
let numero = '5.89';
let num2 = 17.2;
let num3 = 4;

console.log(typeof numero);
console.log(numero + num2); // Error de concepto

// Number()
console.log(Number(numero) + num2);
// parseInt()
console.log(parseInt(numero));
console.log(parseInt(num3));
// parseFloat()
console.log(parseFloat(numero));
console.log(parseFloat(num3));


// Números hexadecimales (base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex));
console.log(parseInt(numHex, 16));


// Obtener los valores mínimo y máximo en Javascript
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
