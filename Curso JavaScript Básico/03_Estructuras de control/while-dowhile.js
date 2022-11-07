// Bucles While

// while (condicion) {
//     // Ejecución del bucle
// }

let i = 0;
let max = 10;
while (i < max) {
    console.log(i);
    i++;    // Si no se pone la actualización del contador, entra en bucle infinito.
}


// Do...while
// Se ejecuta siempre la primera vez

// do {
//     // Ejecución del bucle
// } while (condicion)

i = 15;
do {
    console.log("Estoy en el do...while");
} while (i < max);