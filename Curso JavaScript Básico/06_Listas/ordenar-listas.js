// .sort() -> MODIFICA EL ARRAY
const array = [2, 5, 9, 15, 1, 2, 0, 4]

console.log(array)

// Función callback
// Obligatorio que retorne un número
array.sort((a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return +1
    } else { // a === b
        return 0
    }
})

console.log(array)

// Ordenar únicamente arrays numericos
const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 5461]
arrayNumerico.sort((a, b) => b - a) // a es menor que b (ordenado de menor a mayor)

console.log(arrayNumerico)


/////////////////////////////////////
// Interesante en arrays de objetos

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29 }
]

// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad) {
//         return -1
//     } else if (a.edad > b.edad) {
//         return +1
//     } else {
//         return 0
//     }
// })
listaObjetos.sort((a,b) => a.edad - b.edad)
console.log(listaObjetos)
