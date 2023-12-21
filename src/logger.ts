import pino from 'pino';
import { Configuracion } from './configuracion';

export class Logger {
    private logger: pino.Logger;

    constructor(configuracion: Configuracion) {
        const logLevel = configuracion.get('LOG_LEVEL');
        const logFilePath = configuracion.get('LOG_FILE_PATH');

        if (!logLevel || !logFilePath) {
            throw new Error('Nivel de registro o ruta del archivo de registro no configurados correctamente.');
        }

        this.logger = pino({
            level: logLevel,
        }, pino.destination(logFilePath));
    }

    public debug(message: string, data?: Record<string, any>): void {
        this.logger.debug({ message, ...data });
    }

    public info(message: string, data?: Record<string, any>): void {
        this.logger.info({ message, ...data });
    }

    public warn(message: string, data?: Record<string, any>): void {
        this.logger.warn({ message, ...data });
    }

    public error(message: string, data?: Record<string, any>): void {
        this.logger.error({ message, ...data });
    }
}

export const LoggerConfig = {
  logger: new Logger(new Configuracion()),
  config: new Configuracion(),
};