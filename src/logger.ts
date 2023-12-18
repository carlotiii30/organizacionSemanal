import pino from 'pino';

// Cargar variables de entorno desde el archivo .env
require('dotenv').config();

// Obtener configuraciones de Pino desde variables de entorno
const logLevel = process.env.LOG_LEVEL || 'info';
const logFilePath = process.env.LOG_FILE_PATH || 'logs.log';

// Configurar Pino con las opciones obtenidas
const logger = pino({
  level: logLevel,
}, pino.destination(logFilePath));

export default logger;