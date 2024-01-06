import { LoggerConfig } from './logger';

export abstract class Actividad {

    /**
     * Constructor de la clase Actividad.
     * @param {string} descripcion Descripción de la actividad.
     * @param {Logger} logger Logger de la aplicación.
     * @throws {Error} Si la descripción de la actividad es null.
     */
    constructor(
        private descripcion: string,
        private logger = LoggerConfig.logger,
        private id = Math.floor(Math.random() * 1000),
    ) {
        try {
            this.validarDescripcion();

            logger.info(`Se creó una nueva instancia de Actividad con descripción: ${this.descripcion}`);
        } catch (error: any) {
            this.logger.error(error.message);
            throw error;
        }
    }

    /**
     * Getter de la descripción de la actividad.
     * @returns {string} Descripción de la actividad.
     */
    get Descripcion(): string {
        return this.descripcion;
    }

    /**
     * Getter del id de la actividad.
     * @returns {number} Id de la actividad.
     */
    get Id(): number {
        return this.id;
    }

    /**
     * Validar que la descripción no sea null.
     * @private
     * @throws {Error} Si la descripción de la actividad es null.
     */
    private validarDescripcion() {
        if (this.descripcion == null) {
            throw new Error("La descripción de la actividad no puede ser null");
        }
    }
}
