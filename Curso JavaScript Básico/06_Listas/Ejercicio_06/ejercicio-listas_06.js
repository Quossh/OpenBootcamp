// Ejercicio (Tema 6)
// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Pan", "Leche", "Huevos", "Tomates", "Cerveza"]
console.log(listaCompra)


// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de girasol")
console.log(listaCompra)


// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop("Aceite de girasol")
console.log(listaCompra)


// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listaPeliculas = [
    { titulo: "Interestellar", director: "Christopher Nolan", fecha: 2014 },
    { titulo: "El Padrino", director: "Francis Ford Coppola", fecha: 1972 },
    { titulo: "Pulp Fiction", director: "Quentin Tarantino", fecha: 1994 }
]


// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculas2010 = listaPeliculas.filter(obj => obj.fecha >= 2010)
console.log(peliculas2010)


// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = listaPeliculas.map(obj => obj.director)
console.log(directores)


// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const tituloPeliculas = listaPeliculas.map(obj => obj.titulo)
console.log(tituloPeliculas)


// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaDirectoresTitulos = directores.concat(tituloPeliculas)
console.log(listaDirectoresTitulos)


// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaPropagacion = [...directores, ...tituloPeliculas]
console.log(listaPropagacion)