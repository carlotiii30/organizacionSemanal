import { Actividad } from './actividad';

export class ActividadVariable extends Actividad {

    constructor(
        descripcion: string,
        private duracion: number,
    ) {
        super(descripcion);

        if (duracion <= 0) {
            throw new Error("La duración debe ser mayor que 0.");
        }
    }

    /**
     * Getter de la duración de la actividad.
     * @returns Duración de la actividad.
     */
    get Duracion(): number {
        return this.duracion;
    }
}