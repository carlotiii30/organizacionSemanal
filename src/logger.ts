import pino from 'pino';
import { Configuracion } from './configuracion';

export class Logger {
    private logger: pino.Logger;

    /**
     * Constructor de la clase Logger.
     * @param configuracion Configuración de la aplicación.
     */
    constructor(configuracion: Configuracion) {
        const logLevel = configuracion.get('LOG_LEVEL');

        if (!logLevel) {
            throw new Error('Nivel de registro no configurado correctamente.');
        }

        this.logger = pino({
            level: logLevel,
        });
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
