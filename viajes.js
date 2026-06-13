// viajes.js

// Usamos const para el arreglo ya que la estructura en sí no será reasignada
export const viajes = [];

// Diccionarios base para calcular costos (Ejemplo de extensión de funcionalidad)
const costosDestino = {
  'Paris': 1500,
  'Tokio': 2000,
  'Cancún': 600
};

const costosTransporte = {
  'Avion': 800,
  'Tren': 300,
  'Autobus': 150
};

// 1. Calcular Costo (Función flecha)
export const calcularCosto = (destino, transporte, numPersonas = 1) => {
  // Usamos let porque son variables de bloque y sus valores se calculan dinámicamente
  let costoDest = costosDestino[destino] || 0;
  let costoTransp = costosTransporte[transporte] || 0;
  
  let costoTotal = (costoDest + costoTransp) * numPersonas;

  // Funcionalidad Opcional: Descuento del 10% si viajan 3 o más personas
  if (numPersonas >= 3) {
    costoTotal = costoTotal * 0.90;
  }

  return costoTotal;
};

// 2. Registrar Destinos (Función flecha)
export const registrarDestino = (destino, fecha, transporte, numPersonas = 1) => {
  const costoTotal = calcularCosto(destino, transporte, numPersonas);
  
  // Guardamos el viaje en el arreglo global del módulo
  viajes.push({
    destino,
    fecha,
    transporte,
    numPersonas,
    costoTotal
  });
  console.log(`Destino a ${destino} registrado con éxito.`);
};

// 3. Mostrar Itinerario
export const mostrarItinerario = () => {
  console.log("--- ITINERARIO DE VIAJES ---");
  // forEach es ideal para iterar sobre el arreglo y ejecutar una acción [cite: 2707, 2724]
  viajes.forEach((viaje, index) => {
    console.log(`Viaje ${index + 1}: ${viaje.destino} | Fecha: ${viaje.fecha} | Transporte: ${viaje.transporte} | Personas: ${viaje.numPersonas} | Costo Total: $${viaje.costoTotal}`);
  });
};