import { LoggerConfig } from './logger';

export abstract class Actividad {

    constructor(
        private descripcion: string,
        private logger = LoggerConfig.logger,
    ) {
        if (descripcion == null) {
            this.logger.error("Intento de crear una instancia de Actividad sin descripción.");
            throw new Error("La actividad debe tener una descripción.");
        }

        this.logger.info(`Se creó una nueva instancia de Actividad con descripción: ${descripcion}`);
    }

    /**
     * Getter de la descripción de la actividad.
     * @returns Descripción de la actividad.
     */
    get Descripcion(): string {
        return this.descripcion;
    }
}
