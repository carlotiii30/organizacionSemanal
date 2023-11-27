import { TipoActividad } from "./tipos";

export class Actividad {
    private Tipo: TipoActividad;
    private Tarea: {
        Descripcion: string,
        Dia: string,
        Hora: string,
        Duracion?: number | undefined
    };

    /**
     * Constructor de la clase Actividad.
     * @param tipo Tipo de la actividad.
     * @param descripcion Descripción de la actividad.
     * @param dia Día de la actividad.
     * @param hora Hora de la actividad.
     * @param duracion Duración de la actividad.
     */
    constructor(tipo: TipoActividad, descripcion: string, dia: string, hora: string, duracion?: number) {
        this.Tipo = tipo;
        this.Tarea = {
            Descripcion: descripcion,
            Dia: dia,
            Hora: hora,
            Duracion: duracion,
        };

        if (duracion === undefined) {
            this.calcularDuracion();
        }
    }

    /**
     * Getter de la descripción de la actividad.
     * @returns Descripción de la actividad.
     */
    get descripcion(): string {
        return this.Tarea.Descripcion;
    }

    /**
     * Getter del día de la actividad.
     * @returns Día de la actividad.
     */
    get dia(): string {
        return this.Tarea.Dia;
    }

    /**
     * Getter de la hora de la actividad.
     * @returns Hora de la actividad.
     */
    get hora(): string {
        return this.Tarea.Hora;
    }

    /**
     * Getter del tipo de la actividad.
     * @returns Tipo de la actividad.
     */
    get tipo(): TipoActividad {
        return this.Tipo;
    }

    /**
     * Getter de la duración de la actividad.
     * @returns Duración de la actividad.
     */
    get duracion(): number | undefined {
        return this.Tarea.Duracion;
    }

    /**
     * Calcula la duración de la actividad.
     * @returns Duración de la actividad.
     */
    calcularDuracion(): number | undefined {
        const horaInicio = this.Tarea.Hora.split(/-/)[0];
        const horaFin = this.Tarea.Hora.split(/-/)[1];

        const horaInicioHoras = parseInt(horaInicio.split(/:/)[0]);
        const horaInicioMinutos = parseInt(horaInicio.split(/:/)[1]);

        const horaFinHoras = parseInt(horaFin.split(/:/)[0]);
        const horaFinMinutos = parseInt(horaFin.split(/:/)[1]);

        const duracionHoras = horaFinHoras - horaInicioHoras;
        const duracionMinutos = horaFinMinutos - horaInicioMinutos;

        return duracionHoras + duracionMinutos / 60;
    }
}
