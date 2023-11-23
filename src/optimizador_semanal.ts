import { Actividad, TipoActividad } from "./types";
import { Horario } from "./horario";

export class OptimizadorSemanal {
    private actividades: Actividad[];

    /**
     * Constructor por defecto de la clase OptimizadorSemanal
     */
    constructor() {
        this.actividades = [];
    }

    /**
     * Agrega una actividad a la lista de actividades.
     * @param actividad Actividad a agregar.
     */
    public agregarActividad(actividad: Actividad): void {
        if (actividad.Tarea.Descripcion != null)
            this.actividades.push(actividad);
    }

    /**
     * Getter de las actividades semanales.
     * @returns Lista de actividades de la semana.
     */
    public getActividades(): Actividad[] {
        return this.actividades;
    }

    /**
     * Extrae la información de un día.
     * @param info Contenido del horario a extraer la información.
     * @param dia Día de la semana a extraer la información.
     * @returns Lista de objetos con 'hora' y 'actividad'.
     */
    public extraerInformacion(info: string, dia: string): { hora: string, actividad: string }[] | null {
        if (info == null) {
            return null;
        }

        const regex = new RegExp(`${dia}:[^|]*\\|([^;]*)`, 'g');
        const coincidencias = info.match(regex);

        if (coincidencias) {
            const informacion: { hora: string, actividad: string }[] = [];

            coincidencias.forEach((coincidencia) => {
                const partes = coincidencia.split('|');
                partes.forEach((parte) => {
                    const horaMatch = /\d{2}:\d{2}-\d{2}:\d{2}/.exec(parte);
                    const actividadMatch = /[^\d:]+/.exec(parte);

                    if (horaMatch && actividadMatch) {
                        const hora = horaMatch[0];
                        const actividad = actividadMatch[0].trim();

                        informacion.push({ hora, actividad });
                    }
                });
            });

            return informacion;
        }

        return null;
    }




    /**
     * Extrae el horario de la semana.
     * @param contenido Contenido del horario.
     */
    public extraerHorario(): void {
        const horario = new Horario("./data/horario.txt");
        const contenido = horario.getInfo();

        const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

        // Limpiamos las actividades existentes antes de extraer el nuevo horario
        this.actividades = [];

        dias.forEach((dia) => {
            const informacion = this.extraerInformacion(contenido, dia);

            if (informacion) {
                informacion.forEach((info) => {
                    if (info.actividad) {
                        const actividad: Actividad = {
                            TipoActividad: TipoActividad.ESTUDIO,
                            Tarea: {
                                Descripcion: info.actividad,
                                Dia: dia,
                                Hora: info.hora,
                            },
                        };

                        // Agregar cada actividad directamente a la lista general
                        this.actividades.push(actividad);
                    }
                });
            }
        });
    }
}
