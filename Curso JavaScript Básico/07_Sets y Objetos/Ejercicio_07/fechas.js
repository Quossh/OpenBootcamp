// La fecha de hoy
const hoy = new Date()
console.log(hoy)

// La fecha de tu nacimiento
const fechaNacimiento = new Date(1989, 1, 24)
console.log(fechaNacimiento)

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const esPosterior = hoy > fechaNacimiento
console.log(esPosterior)

// Una variable que contenga el día de tu nacimiento
const diaNacimiento = fechaNacimiento.getDate()
console.log(diaNacimiento)

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth() - 1
console.log(mesNacimiento)

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyoNacimiento = fechaNacimiento.getFullYear()
console.log(anyoNacimiento)