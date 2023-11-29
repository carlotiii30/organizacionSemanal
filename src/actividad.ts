import { TipoActividad } from "./tipos";

export class Actividad {

    constructor(
        tipo: TipoActividad,
        tarea: {
            descripcion: string,
            dia: string,
            hora: string,
            duracion?: number | undefined
        }) { }

    /**
     * Getter de la descripción de la actividad.
     * @returns Descripción de la actividad.
     */
    get descripcion(): string {
        return this.descripcion;
    }

    /**
     * Getter del día de la actividad.
     * @returns Día de la actividad.
     */
    get dia(): string {
        return this.dia;
    }

    /**
     * Getter de la hora de la actividad.
     * @returns hora de la actividad.
     */
    get hora(): string {
        return this.hora;
    }

    /**
     * Getter del tipo de la actividad.
     * @returns tipo de la actividad.
     */
    get tipo(): TipoActividad {
        return this.tipo;
    }

    /**
     * Getter de la duración de la actividad.
     * @returns Duración de la actividad.
     */
    get duracion(): number | undefined {
        return this.duracion;
    }

    /**
     * Calcula la duración de la actividad.
     * @returns Duración calculada de la actividad.
     */
    calcularDuracion(): number | undefined {
        const horaInicio = this.hora.split(/-/)[0];
        const horaFin = this.hora.split(/-/)[1];

        const horaIniciohoras = parseInt(horaInicio.split(/:/)[0]);
        const horaInicioMinutos = parseInt(horaInicio.split(/:/)[1]);

        const horaFinhoras = parseInt(horaFin.split(/:/)[0]);
        const horaFinMinutos = parseInt(horaFin.split(/:/)[1]);

        const duracionhoras = horaFinhoras - horaIniciohoras;
        const duracionMinutos = horaFinMinutos - horaInicioMinutos;

        return duracionhoras + duracionMinutos / 60;
    }
}
