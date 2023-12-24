import { LoggerConfig } from './logger';

export abstract class Actividad {

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

    private validarDescripcion() {
        if (this.descripcion == null) {
            throw new Error("La descripción de la actividad no puede ser null");
        }
    }
}
