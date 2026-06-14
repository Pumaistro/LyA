/**
 * PROYECTO: Recursión y Backtracking
 * Problema: Buscar un objeto en una lista de regalos usando recursión.
 */

// Función recursiva para buscar un regalo
const buscarRegalo = (gifts, giftName, index = 0) => {
    // Caso base 1: Si llegamos al final del arreglo sin encontrarlo
    if (index === gifts.length) {
        return `❌ El regalo "${giftName}" no está en la lista.`;
    }

    // Caso base 2: Si el regalo en el índice actual coincide con el que buscamos
    if (gifts[index] === giftName) {
        return `✅ ¡Encontrado! El regalo "${giftName}" está en la posición ${index}.`;
    }

    // Llamada recursiva: Volvemos a ejecutar la función aumentando el índice en 1
    return buscarRegalo(gifts, giftName, index + 1);
};

// Lista de regalos 
const misRegalos = ["Chamarra Pirma", "Lentes Cloe", "Reloj Casio retro", "Laptop ASUS V16"];

console.log("--- BÚSQUEDA DE REGALOS (RECURSIÓN) ---");
console.log(buscarRegalo(misRegalos, "Laptop ASUS V16")); 
console.log(buscarRegalo(misRegalos, "Suéter feo de Navidad"));