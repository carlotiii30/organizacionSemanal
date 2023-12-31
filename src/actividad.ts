import { LoggerConfig } from './logger';

export abstract class Actividad {

    /**
     * Constructor de la clase Actividad.
     * @param descripcion Descripción de la actividad.
     * @param logger Logger de la aplicación.
     */
    constructor(
        private descripcion: string,
        private logger = LoggerConfig.logger,
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
     * @returns Descripción de la actividad.
     */
    get Descripcion(): string {
        return this.descripcion;
    }

    /**
     * Validar que la descripción no sea null.
     * @throws Error si la descripción es null.
     */
    private validarDescripcion() {
        if (this.descripcion == null) {
            throw new Error("La descripción de la actividad no puede ser null");
        }
    }
}
