// Sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, 6, 2, 1, "hola", { id: 5 }, "hola"]

const mySet = new Set(array)
console.log(array)
console.log(mySet)


// .add()
mySet.add(9)
console.log(mySet)
mySet.add(4)
console.log(mySet)


// .delete()
mySet.delete("hola")
console.log(mySet)


// .clear()
// mySet.clear()
// console.log(mySet)


// .has()
// console.log(array.includes(2))
console.log(mySet.has(40))


// .size (propiedad)
console.log(mySet.size)

// Hacer una iteración dentro del conjunto de valores
mySet.forEach(valor => {
    console.log(valor)
})

const it_mySet = mySet.values()
console.log(it_mySet)

const ar_mySet = [ ...mySet ]
console.log(ar_mySet[1])