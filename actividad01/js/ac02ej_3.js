function esPrimo(num) {
    if (num <= 1) return false; // Menos de 2 no es primo
    if (num <= 3) return true;  // 2 y 3 son primos
    if (num % 2 === 0 || num % 3 === 0) return false; // Excluye múltiplos de 2 y 3

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function generarPrimosAleatorios(n) {
    const primos = [];
    while (primos.length < n) {
        const num = Math.floor(Math.random() * 110) + 1; // Genera un número entre 1 y 110
        if (esPrimo(num) && !primos.includes(num)) { // Verifica si es primo y no está ya incluido
            primos.push(num);
        }
    }
    return primos;
}

const cantidad = 10;
const primosAleatorios = generarPrimosAleatorios(cantidad);
console.log('Números primos aleatorios:', primosAleatorios);

