import { TipoActividad } from "./tipos";

export class Actividad {
    private Tipo: TipoActividad;
    private Tarea: {
        Descripcion: string | null,
        Dia: string,
        Hora: string,
        Duracion?: number
    };

    /**
     * Constructor de la clase Actividad.
     */
    constructor(tipo: TipoActividad, descripcion: string, dia: string, hora: string) {
        this.Tipo = tipo;
        this.Tarea = {
            Descripcion: descripcion,
            Dia: dia,
            Hora: hora
        };
    }

    /**
     * Getter de la descripción de la actividad.
     * @returns Descripción de la actividad.
     */
    public getDescripcion(): string | null {
        return this.Tarea.Descripcion;
    }

    /**
     * Getter del día de la actividad.
     * @returns Día de la actividad.
     */
    public getDia(): string {
        return this.Tarea.Dia;
    }

    /**
     * Getter de la hora de la actividad.
     * @returns Hora de la actividad.
     */
    public getHora(): string {
        return this.Tarea.Hora;
    }

    /**
     * Getter del tipo de la actividad.
     * @returns Tipo de la actividad.
     */
    public getTipo(): TipoActividad {
        return this.Tipo;
    }

    /**
     * Getter de la duración de la actividad.
     * @returns Duración de la actividad.
     */
    public getDuracion(): number | undefined {
        return this.Tarea.Duracion;
    }

    /**
     * Setter de la duración de la actividad.
     * @param duracion Duración de la actividad.
     */
    public setDuracion(duracion: number): void {
        if (duracion != this.Tarea.Duracion)
            this.Tarea.Duracion = duracion;
    }


    /**
     * Calcula la duración de la actividad.
     * @returns Duración de la actividad.
     */
    public calcularDuracion(): number | undefined{
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