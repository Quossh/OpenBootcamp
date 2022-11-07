// Casos muy específicos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue;   // Al localizar el dato, continua leyendo la lista y ejecutandola
    }

    console.log(lista[i]);

    if (lista[i] > 5) {
        break;      // Al llegar al número indicado, corta el bucle
    }
}


// Cuál es el ámbito de un bucle

// var = 5;
// Tiene ámbito global para todo el archivo, por lo que se podría llamar a la variable en cualquier parte del código.

// let = 50;
// Tiene ámbito local, se podría llamar a la variable solo en el bloque de código donde se defina.

// const = 100;
// Tiene ámbito local, se podría llamar a la variable solo en el bloque de código donde se defina.