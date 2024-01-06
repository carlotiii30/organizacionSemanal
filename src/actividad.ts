import { LoggerConfig } from './logger';

export class ActividadId {
    private static nextId = 1;

    /**
     * Constructor de la clase ActividadId.
     * @private
     * @param {number} value Valor del id de la actividad.
     */
    private constructor(public readonly value: number) { }

    /**
     * Crear un nuevo id de actividad.
     * @returns {ActividadId} Id de la actividad.
     */
    static next(): ActividadId {
        return new ActividadId(ActividadId.nextId++);
    }
}

export abstract class Actividad {
    private readonly id: ActividadId;

    /**
     * Constructor de la clase Actividad.
     * @param {string} descripcion Descripción de la actividad.
     * @param {Logger} logger Logger de la aplicación.
     * @throws {Error} Si la descripción de la actividad es null.
     */
    constructor(
        private descripcion: string,
        private logger = LoggerConfig.logger,
    ) {
        try {
            this.validarDescripcion();
            this.id = ActividadId.next();

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
     * @returns {ActividadId} Id de la actividad.
     */
    get Id(): ActividadId {
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
