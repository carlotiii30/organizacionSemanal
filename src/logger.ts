import pino from 'pino';
import { Configuracion } from './configuracion';
import * as fs from 'fs';

export class Logger {
    private logger: pino.Logger;

    /**
     * Constructor de la clase Logger.
     * @param configuracion Configuración de la aplicación.
     */
    constructor(configuracion: Configuracion) {
        const logLevel = configuracion.get('LOG_LEVEL');
        const logFilePath = configuracion.get('LOG_FILE_PATH');

        if (!logLevel || !logFilePath) {
            throw new Error('Nivel de registro o ruta del archivo de registro no configurados correctamente.');
        }

        const streams = [
            { level: logLevel, stream: process.stdout },
            { level: logLevel, stream: fs.createWriteStream(logFilePath, { flags: 'a' }) },
        ];

        this.logger = pino({
            level: logLevel,
        }, pino.multistream(streams));
    }


    /**
     * Registrar un mensaje de debug.
     * @param message Mensaje a registrar.
     * @param data Datos a registrar.
     */
    public debug(message: string, data?: Record<string, any>): void {
        this.logger.debug({ message, ...data });
    }

    /**
     * Registrar un mensaje de información.
     * @param message Mensaje a registrar.
     * @param data Datos a registrar.
     */
    public info(message: string, data?: Record<string, any>): void {
        this.logger.info({ message, ...data });
    }

    /**
     * Registrar un mensaje de advertencia.
     * @param message Mensaje a registrar.
     * @param data Datos a registrar.
     */
    public warn(message: string, data?: Record<string, any>): void {
        this.logger.warn({ message, ...data });
    }

    /**
     * Registrar un mensaje de error.
     * @param message Mensaje a registrar.
     * @param data Datos a registrar.
     */
    public error(message: string, data?: Record<string, any>): void {
        this.logger.error({ message, ...data });
    }
}

export const LoggerConfig = {
  logger: new Logger(new Configuracion()),
  config: new Configuracion(),
};