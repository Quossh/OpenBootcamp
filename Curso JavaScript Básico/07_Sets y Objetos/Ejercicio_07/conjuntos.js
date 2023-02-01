// Un nuevo Set con los nombres de tu familia
const familia = ["Rosa", "Pedro", "Clara", "Alberto"]

const mySet = new Set(familia)
console.log(familia)

// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
mySet.add("Alberto")
console.log(mySet)

// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
mySet.add("JavaScript")
console.log(mySet)