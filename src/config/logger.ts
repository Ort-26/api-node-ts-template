import { createLogger, transports, format } from 'winston';
import { resolve } from 'path'; // Importa la función `resolve` de Node.js
import DailyRotateFile from 'winston-daily-rotate-file';
import path from 'path';

const logDirectory = resolve(__dirname, '../../logs'); // Ruta a la carpeta de logs
const logFormat = format.combine(
  format.timestamp(),
  format.printf(({ timestamp, level, message }) => {
    return `[${timestamp}].[${level}]: ${message}`;
  })
);

const dailyRotateTransport = new DailyRotateFile({
  filename: path.join(logDirectory, 'application-%DATE%.log'),
  datePattern: 'YYYY-MM-DD', // Patrón para nombres de archivo diarios
  zippedArchive: true,
  maxSize: '20m', // Tamaño máximo de archivo antes de la rotación
  maxFiles: '14d', // Número máximo de días para conservar archivos
});

const logger = createLogger({
  format: logFormat,
  transports: [
    new transports.Console(),
    new transports.File({ filename: `${logDirectory}/error.log`, level: 'error' }),
    dailyRotateTransport
  ]
});

module.exports = logger;