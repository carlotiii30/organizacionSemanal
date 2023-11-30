import { Actividad } from './actividad';

export class ActividadFija extends Actividad {

    constructor(
        descripcion: string,
        private dia: string,
        private hora: string,
    ) {
        super(descripcion);
    }

    /**
     * Getter del día de la actividad.
     * @returns Día de la actividad.
     */
    get Dia(): string {
        return this.dia;
    }

    /**
     * Getter de la hora de la actividad.
     * @returns Hora de la actividad.
     */
    get Hora(): string {
        return this.hora;
    }
}