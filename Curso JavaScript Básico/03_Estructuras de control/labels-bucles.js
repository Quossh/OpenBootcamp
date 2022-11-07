// break y continue
// labels

let unidades = 0;
let decenas = 0;

// Sin labels
while (true) {
    while (true) {
        console.log(`El número actual es:  ${decenas}${unidades}`)
        unidades++
        if (unidades === 10) {
            unidades = 0;
            break
        }
    }
    decenas++
    if (decenas === 2) {
        console.log(`El número actual es:  ${decenas}${unidades}`)
        break
    }
}



// Con labels
bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log(`El número actual es:  ${decenas}${unidades}`)
        unidades++
        if (unidades === 10) {
            unidades = 0
            break bucleUnidades
        }
        if (decenas === 2) {
            break bucleDecenas
        }
    }
    decenas++
}
console.log("Ya hemos terminado")