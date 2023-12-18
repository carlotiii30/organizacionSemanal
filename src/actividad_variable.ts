import { Actividad } from './actividad';
import { LoggerConfig } from './logger';

export class ActividadVariable extends Actividad {

    constructor(
        descripcion: string,
        logger = LoggerConfig.logger,
        private duracion: number,
    ) {
        super(descripcion, logger);

        if (duracion <= 0) {
            logger.error(`Intento de crear una instancia de ActividadVariable con duración no válida: ${duracion}`);
            throw new Error("La duración debe ser mayor que 0.");
        }

        logger.info(`Se creó una nueva instancia de ActividadVariable con descripción: ${descripcion} y duración: ${duracion}`);
    }

    /**
     * Getter de la duración de la actividad.
     * @returns Duración de la actividad.
     */
    get Duracion(): number {
        return this.duracion;
    }
}