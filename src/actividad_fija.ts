import { Actividad } from './actividad';

export enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo,
}

export class ActividadFija extends Actividad {

    constructor(
        descripcion: string,
        private dia: DiaSemana,
        private horaInicio: string,
        private horaFin: string
    ) {
        super(descripcion);

        if (!this.validarFormatoHora(horaInicio) || !this.validarFormatoHora(horaFin)) {
            throw new Error("El formato de la hora no es válido. Debe ser HH:MM");
        }
    }

    /**
     * Getter del día de la actividad.
     * @returns Día de la actividad.
     */
    get Dia(): DiaSemana {
        return this.dia;
    }

    /**
     * Getter de la hora de inicio de la actividad.
     * @returns Hora de inicio de la actividad.
     */
    get HoraInicio(): string {
        return this.horaInicio;
    }

    /**
     * Getter de la hora de fin de la actividad.
     * @returns Hora de fin de la actividad.
     */
    get HoraFin(): string {
        return this.horaFin;
    }

    /**
    * Validar el formato de la hora.
    * @param hora Hora a validar.
    * @returns true si el formato es válido, false de lo contrario.
    */
    private validarFormatoHora(hora: string): boolean {
        const formatoHoraRegex = /^\d{1,2}:\d{2}$/;
        return formatoHoraRegex.test(hora);
    }
}