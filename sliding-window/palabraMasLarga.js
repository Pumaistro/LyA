/**
 * PROYECTO: Algoritmo Sliding Window
 * Problema: Encontrar la Palabra Más Larga en un texto
 */

const encontrarPalabraMasLarga = (texto) => {
    // 1. Divide el texto en palabras individuales utilizando el método .split(' ')
    const palabras = texto.split(' ');
    
    // Variable para guardar la palabra más larga encontrada hasta el momento
    let palabraMasLarga = "";

    // 2. Desliza una "ventana" de tamaño 1 que recorra cada palabra del arreglo
    for (let i = 0; i < palabras.length; i++) {
        let palabraActual = palabras[i];
        
        // Compara su longitud con la palabra más larga encontrada hasta ese momento
        if (palabraActual.length > palabraMasLarga.length) {
            palabraMasLarga = palabraActual; // Actualiza si encuentra una mayor
        }
    }

    // 3. Devuelve la palabra más larga al final del proceso
    return palabraMasLarga;
};

// Texto de prueba 
const parrafo = "El proyecto CuFloor Solutions desarrolla recubrimientos antimicrobianos para entornos institucionales";

console.log("--- BÚSQUEDA DE LA PALABRA MÁS LARGA ---");
console.log(`Texto original: "${parrafo}"`);
console.log(`\n✅ La palabra más larga es: "${encontrarPalabraMasLarga(parrafo)}"`);