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
        private hora: string,
    ) {
        super(descripcion);

        if (!this.validarFormatoHora(hora)) {
            throw new Error("El formato de la hora no es válido. Debe ser HH:MM-HH:MM");
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
     * Getter de la hora de la actividad.
     * @returns Hora de la actividad.
     */
    get Hora(): string {
        return this.hora;
    }

    /**
    * Validar el formato de la hora.
    * @param hora Hora a validar.
    * @returns true si el formato es válido, false de lo contrario.
    */
    private validarFormatoHora(hora: string): boolean {
        const formatoHoraRegex = /^\d{2}:\d{2}-\d{2}:\d{2}$/;
        return formatoHoraRegex.test(hora);
    }
}