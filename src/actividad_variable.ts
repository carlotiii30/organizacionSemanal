import { Actividad } from './actividad';
import { LoggerConfig } from './logger';

export class ActividadVariable extends Actividad {

    /**
     * Constructor de la clase ActividadVariable.
     * @param {string} descripcion Descripción de la actividad.
     * @param {Logger} logger Logger de la aplicación.
     * @param {number} duracion Duración de la actividad.
     * @throws {Error} Si la duración de la actividad es null o menor que 0.
     * @throws {Error} Si la descripción de la actividad es null.
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
     * @returns {number} Duración de la actividad.
     */
    get Duracion(): number {
        return this.duracion;
    }

    /**
     * Validar la duración de la actividad.
     * @private
     * @param {number} duracion Duración de la actividad.
     * @throws {Error} Si la duración de la actividad es null o menor que 0.
     */
    private validarDuracion(duracion: number) {
        if (duracion == null || duracion <= 0) {
            throw new Error("La duración de la actividad no puede ser null ni menor que 0.");
        }
    }
}