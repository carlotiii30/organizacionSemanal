import { Actividad } from './actividad';
import { LoggerConfig } from './logger';

export enum DiaSemana {
    LUNES,
    MARTES,
    MIERCOLES,
    JUEVES,
    VIERNES
}

export class ActividadFija extends Actividad {

    constructor(
        descripcion: string,
        logger = LoggerConfig.logger,
        private dia: DiaSemana,
        private horaInicio: string,
        private horaFin: string
    ) {
        super(descripcion, logger);

        try {
            this.validarFormatoHora(horaInicio);
            this.validarFormatoHora(horaFin);

            logger.info(`Se creó una nueva instancia de ActividadFija con descripción: ${descripcion}, día: ${DiaSemana[dia]}, horaInicio: ${horaInicio}, horaFin: ${horaFin}`);
        }
        catch (error: any) {
            logger.error(error.message);
            throw error;
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

        if (!formatoHoraRegex.test(hora)) {
            throw new Error("El formato de la hora no es válido.");
        }

        return formatoHoraRegex.test(hora);
    }
}