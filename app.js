// app.js

// Importamos las funciones usando la sintaxis de desestructuración [cite: 2630]
import { registrarDestino, mostrarItinerario } from './viajes.js';

// Simulamos la interacción de los usuarios registrando destinos
registrarDestino('Paris', '2024-05-15', 'Avion', 2);
registrarDestino('Cancún', '2024-08-10', 'Autobus', 4); // ¡Aplicará el descuento!
registrarDestino('Tokio', '2024-11-20', 'Avion', 1);

// Mostramos el resultado final
mostrarItinerario();