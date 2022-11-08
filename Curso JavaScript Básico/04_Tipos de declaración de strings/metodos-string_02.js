// Métodos de cadenas de texto (parte 2)
let input = "Acuario"
let db = "acuario"

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase(input))
console.log(input.toUpperCase(input))
console.log(input.toLowerCase(input) === input.toLowerCase(db))
console.log(input.toUpperCase(input) === input.toUpperCase(db))

// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

// Eliminar espacios al inicio y al final
let str_3 = "Hola soy un string con espacios al final.     "
console.log(str_3.length)
// trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

// Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string número 4"   // ["H, "o", "l", "a"....]

console.log(str_4.charAt(7))
console.log(str_4[7])

// Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Alberto y me gusta el paintball. Mi nombre es Alberto y tengo 32 años"

console.log(str_5.indexOf("Alberto"))
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf("Alberto"))