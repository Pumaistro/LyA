/**
 * EJEMPLO EXTRA: Escritura de archivos de texto plano (.txt)
 * Caso de uso: Generar un reporte rápido de inventario de laboratorio.
 */

const fs = require('fs');

const reporte = `
REPORTE DE INVENTARIO - SISTEMAS BIOMÉDICOS
-------------------------------------------
1. Amplificadores Operacionales LM324: 15 unidades
2. Resistencias de 1k Ohm: 50 unidades
3. Placas de pruebas (Protoboards): 3 unidades
-------------------------------------------
Reporte generado automáticamente con Node.js
`;

// Escribimos el archivo de forma asíncrona para no bloquear el sistema
fs.writeFile('inventario.txt', reporte, (error) => {
    if (error) {
        console.log('Hubo un error al crear el archivo:', error);
    } else {
        console.log('✅ Archivo "inventario.txt" generado exitosamente.');
    }
});