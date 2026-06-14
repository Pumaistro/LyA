/**
 * PROYECTO: Divide and Conquer
 * Problema: Búsqueda del Máximo en un Arreglo
 */

const encontrarMaximo = (arr) => {
    // Caso base: Si el arreglo tiene un solo elemento, ese es el máximo
    if (arr.length === 1) {
        return arr[0];
    }

    // 1. Dividir: Dividimos el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // 2. Conquistar: Resuelve el problema recursivamente para encontrar el máximo en cada mitad
    const maxLeft = encontrarMaximo(left);
    const maxRight = encontrarMaximo(right);

    // 3. Combinar: Combina las soluciones comparando los máximos de ambas mitades
    // 4. Devuelve el número máximo encontrado
    return Math.max(maxLeft, maxRight);
};

// Arreglo de prueba
const numeros = [15, 42, 8, 99, 23, 4, 75];

console.log("--- BÚSQUEDA DEL NÚMERO MÁXIMO ---");
console.log(`Arreglo original: [${numeros}]`);
console.log(`✅ El número máximo es: ${encontrarMaximo(numeros)}`);