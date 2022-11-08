// Ejercicio (tema 4)
let nombre = "Alberto"
let apellido = "Troyano"
let estudiante = `${nombre} ${apellido}`
let estudianteMayus = estudiante.toUpperCase(estudiante)
let estudianteMinus = estudiante.toLowerCase(estudiante)
let contador = estudiante.length
let primeraLetra = nombre.charAt(0)
let ultimaLetraApellido = apellido[6]
let eliminarEspacios = estudiante.trim(estudiante)
let contieneNombre = estudiante.includes("Alberto")

console.log(nombre)
console.log(apellido)
console.log(estudiante)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(contador)
console.log(primeraLetra)
console.log(ultimaLetraApellido)
console.log(eliminarEspacios)
console.log(contieneNombre)