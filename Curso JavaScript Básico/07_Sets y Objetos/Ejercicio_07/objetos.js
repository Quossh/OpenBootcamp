// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const objPersonal = [
    {
        nombre: "Alberto",
        apellido: "Troyano Rosales",
        edad: 33,
        altura: 182,
        eresDesarrollador: false
    }
]

// Una variable que obtenga tu edad a partir del objeto anterior
const edad = objPersonal.edad
console.log(edad)

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const objAmigos = [
    {
        nombre: "Pedro",
        apellido: "Ortega",
        edad: 31,
        altura: 185,
        eresDesarrollador: true
    },
    {   
        nombre: "Fernando",
        apellido: "Ruiz",
        edad: 28,
        altura: 174,
        eresDesarrollador: false
    }
]

// const lista = objPersonal.concat(objAmigos)
const lista = [ ...objAmigos, ...objPersonal ]
console.log(lista)

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
lista.sort((a,b) => b.edad - a.edad)
console.log(lista)