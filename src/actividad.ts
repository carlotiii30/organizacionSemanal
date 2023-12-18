import logger from './logger';

export abstract class Actividad {

    constructor(
        private descripcion: string,
    ){
        if (descripcion == null) {
            logger.error("Intento de crear una instancia de Actividad sin descripción.");
            throw new Error("La actividad debe tener una descripción.");
        }

        logger.info(`Se creó una nueva instancia de Actividad con descripción: ${descripcion}`);
    }

    /**
     * Getter de la descripción de la actividad.
     * @returns Descripción de la actividad.
     */
    get Descripcion(): string {
        return this.descripcion;
    }
}
