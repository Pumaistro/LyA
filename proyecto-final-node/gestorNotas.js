/**
 * PROYECTO FINAL: Gestor de Notas con Node.js
 * Uso del módulo 'fs' para administrar un archivo JSON.
 */

const fs = require('fs');
const archivoNotas = 'notas.json';

// Función auxiliar para leer las notas del archivo JSON
const cargarNotas = () => {
    try {
        const dataBuffer = fs.readFileSync(archivoNotas);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        // Si el archivo no existe o está vacío, regresamos un arreglo vacío
        return [];
    }
};

// Función auxiliar para guardar las notas en el archivo JSON
const guardarNotas = (notas) => {
    const dataJSON = JSON.stringify(notas, null, 2); // null y 2 son para que el JSON se vea ordenado
    fs.writeFileSync(archivoNotas, dataJSON);
};

// 1. Crear una nueva nota
const crearNota = (titulo, contenido) => {
    const notas = cargarNotas();
    // Verificamos que el título no exista ya
    const notasDuplicadas = notas.filter((nota) => nota.titulo === titulo);

    if (notasDuplicadas.length === 0) {
        notas.push({ titulo: titulo, contenido: contenido });
        guardarNotas(notas);
        console.log(`✅ ¡Éxito! Nota agregada: "${titulo}"`);
    } else {
        console.log(`⚠️ Error: El título "${titulo}" ya está ocupado. Usa otro.`);
    }
};

// 2. Leer todas las notas
const listarNotas = () => {
    const notas = cargarNotas();
    console.log("\n--- 📋 MIS NOTAS PERSONALES ---");
    notas.forEach((nota, index) => {
        console.log(`${index + 1}. ${nota.titulo}`);
        console.log(`   📝 ${nota.contenido}\n`);
    });
    console.log("-------------------------------\n");
};

// 3. Eliminar una nota específica
const eliminarNota = (titulo) => {
    const notas = cargarNotas();
    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    if (notas.length > notasRestantes.length) {
        guardarNotas(notasRestantes);
        console.log(`🗑️ Nota eliminada: "${titulo}"`);
    } else {
        console.log(`❌ No se encontró ninguna nota con el título: "${titulo}"`);
    }
};

// ==========================================
// 🚀 PRUEBAS DE LA APLICACIÓN
// ==========================================

console.log("Iniciando Gestor de Notas...\n");

// Mostrar las notas que ya están en el JSON
listarNotas();

// Agregar una nueva nota
crearNota("Diseño de Filtros", "Terminar el código en MATLAB para el filtro de primer orden.");

// Mostrar las notas actualizadas
listarNotas();

// Eliminar una nota
eliminarNota("Clases de Química");

// Ver el resultado final
listarNotas();