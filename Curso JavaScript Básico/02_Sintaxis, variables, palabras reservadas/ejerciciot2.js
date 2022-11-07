const librofav = {
    titulo: "Dime quien soy",
    autor: "Julia Navarro",
    fecha: new Date(2020, 10, 12),
    url: "https://www.casadellibro.com/libro-dime-quien-soy/9788466353946/11718852"
}

const lista_ejercicio_t2 = ["Alberto", 32, false, new Date(1990, 0, 28), librofav];
lista_ejercicio_t2[2] = "No, soy diseñador ux/ui";

console.log(lista_ejercicio_t2);