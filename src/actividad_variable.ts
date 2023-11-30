import { Actividad } from './actividad';

export class ActividadVariable extends Actividad {

    constructor(
        descripcion: string,
        private duracion: number,
    ) {
        super(descripcion);
    }

    /**
     * Getter de la duración de la actividad.
     * @returns Duración de la actividad.
     */
    get Duracion(): number {
        return this.duracion;
    }
}