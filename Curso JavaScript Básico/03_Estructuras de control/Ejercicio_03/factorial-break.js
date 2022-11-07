// Factorial con bucle while, una bifurcación if y una sentencia break
let factorial = 10;
let n = factorial - 1;

while (factorial) {
    factorial *= n;
    n--;
    
    if (n <= 1) {
        break;
    }
}
console.log(factorial);