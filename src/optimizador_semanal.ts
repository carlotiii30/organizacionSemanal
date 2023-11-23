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

        const regex = new RegExp(`${dia}[^;]*?(\\d{2}:\\d{2}-\\d{2}:\\d{2}[^;]*)`, 'g');

        const coincidencias = info.match(regex);

        if (coincidencias) {
            const informacion = coincidencias.map((coincidencia) => {
                const partes = coincidencia.split(/\s+/);
                const hora = partes[1];
                const actividad = partes.slice(2).join(' ');

                return { hora, actividad };
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

        const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

        dias.forEach((dia) => {
            const informacion = this.extraerInformacion(contenido, dia);

            if (informacion) {
                let actividad: Actividad | null = null;

                informacion.forEach((info) => {
                    if (info.actividad) {
                        actividad = {
                            TipoActividad: TipoActividad.ESTUDIO,
                            Tarea: {
                                Descripcion: info.actividad,
                                Dia: dia,
                                Hora: info.hora,
                            },
                        };

                        this.agregarActividad(actividad);
                    }
                });
            }
        });
    }
}

