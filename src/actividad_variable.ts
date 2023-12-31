import { Actividad } from './actividad';
import { LoggerConfig } from './logger';

export class ActividadVariable extends Actividad {

    /**
     * Constructor de la clase ActividadVariable.
     * @param descripcion Descripción de la actividad.
     * @param logger Logger de la aplicación.
     * @param duracion Duración de la actividad.
     */
    constructor(
        descripcion: string,
        logger = LoggerConfig.logger,
        private duracion: number,
    ) {
        super(descripcion, logger);

        try {
            this.validarDuracion(duracion);

            logger.info(`Se creó una nueva instancia de ActividadVariable con descripción: ${descripcion} y duración: ${duracion}`);
        }
        catch (error: any) {
            logger.error(error.message);
            throw error;
        }
    }

    /**
     * Getter de la duración de la actividad.
     * @returns Duración de la actividad.
     */
    get Duracion(): number {
        return this.duracion;
    }

    /**
     * Validar la duración de la actividad.
     * @param duracion Duración de la actividad.
     */
    private validarDuracion(duracion: number) {
        if (duracion == null || duracion <= 0) {
            throw new Error("La duración de la actividad no puede ser null ni menor que 0.");
        }
    }
}