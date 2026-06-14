// 1. Crea un arreglo vacío llamado listaDeCompras.
// Usamos un arreglo para almacenar nuestra colección de elementos[cite: 8].
const listaDeCompras = [];

// 2. Implementa una función agregarProducto(producto)
const agregarProducto = (producto) => {
    // Verificamos que el producto no exista ya para evitar duplicados
    if (!listaDeCompras.includes(producto)) {
        // Usamos el método .push() para agregar elementos al final del arreglo[cite: 19].
        listaDeCompras.push(producto);
        console.log(`✅ "${producto}" agregado a la lista.`);
    } else {
        console.log(`⚠️ El producto "${producto}" ya está en la lista. No se agregó.`);
    }
};

// 3. Implementa una función eliminarProducto(producto)
const eliminarProducto = (producto) => {
    // Buscamos el índice del producto
    const index = listaDeCompras.indexOf(producto);
    
    if (index !== -1) {
        // Si existe, lo eliminamos usando splice
        listaDeCompras.splice(index, 1);
        console.log(`🗑️ "${producto}" eliminado de la lista.`);
    } else {
        console.log(`❌ El producto "${producto}" no se encontró en la lista.`);
    }
};

// 4. Implementa una función mostrarLista()
const mostrarLista = () => {
    console.log("\n--- 🛒 Mi Lista de Compras ---");
    if (listaDeCompras.length === 0) {
        console.log("La lista está vacía.");
    } else {
        // Usamos forEach para iterar e imprimir cada producto
        listaDeCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    console.log("------------------------------\n");
};

// --- PRUEBAS DEL CÓDIGO ---

agregarProducto("Manzana");
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Leche"); // Intento de duplicado

mostrarLista();

eliminarProducto("Manzana");
eliminarProducto("Galletas"); // Intento de eliminar algo que no existe

mostrarLista();git