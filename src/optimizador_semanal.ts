import { TipoActividad } from "./tipos";
import { Archivo } from "./archivo";
import { Actividad } from "./actividad";

export class OptimizadorSemanal {

    private actividades: Actividad[];
    private horario: string[][];

    /**
     * Constructor por defecto de la clase OptimizadorSemanal
     */
    constructor() {
        this.actividades = [];
        this.horario = [];
    }

    /**
     * Agrega una actividad a la lista de actividades.
     * @param actividad Actividad a agregar.
     */
    public agregarActividad(actividad: Actividad): void {
        if (actividad.getDescripcion() != null)
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
     * Getter del horario.
     * @returns Horario.
     */
    public getHorario(): string[][] {
        return this.horario;
    }


    /**
     * Extrae la información de un día.
     * @param info Contenido del horario a extraer la información.
     * @param dia Día de la semana a extraer la información.
     * @returns Lista de objetos con 'hora' y 'descripcion'.
     */
    public extraerInformacionHorario(info: string): { dia: string; hora: string; descripcion: string }[] | null {
        if (info == null) {
            return null;
        }

        const partes = info.split(/ /);
        const dia = partes[0];
        const hora = partes[1];
        const descripcion = partes.slice(2).join(" ");

        return [{ dia: dia, hora: hora, descripcion: descripcion }];
    }

    /**
     * Extrae el horario de la semana.
     * @param horario Horario a extraer.
     */
    public extraerHorario(horario: Archivo): void {
        const contenido = horario.getInfo();
        const lineas = contenido.split(/\n/);

        lineas.forEach(linea => {
            const informacion = this.extraerInformacionHorario(linea);

            if (informacion) {
                informacion.forEach((info) => {
                    const actividad = new Actividad(TipoActividad.FIJA, info.descripcion, info.dia, info.hora);
                    this.agregarActividad(actividad);
                });
            }
        });
    }

    /**
     * Extrae la información de una lista de actividades.
     * @param info Contenido de la lista.
     * @returns Descripcion y duración de las actividades.
     */
    public extraerInformacionLista(info: string): { descripcion: string, duracion: number }[] | null {
        if (info == null) {
            return null;
        }

        const partes = info.split(/-/);
        const duracion = parseInt(partes[1].slice(0, -1));
        const descripcion = partes[0].slice(0, -1);

        return [{ descripcion: descripcion, duracion: duracion }];
    }

    /**
     * Extrae las actividades de la lista de actividades.
     * @param lista Lista de actividades a extraer.
     */
    public extraerActividades(lista: Archivo): void {
        const contenido = lista.getInfo();
        const lineas = contenido.split(/\n/);

        lineas.forEach(linea => {
            const informacion = this.extraerInformacionLista(linea);

            if (informacion) {
                informacion.forEach((info) => {
                    const actividad = new Actividad(TipoActividad.VARIABLE, info.descripcion, "", "");
                    actividad.setDuracion(info.duracion);
                    this.agregarActividad(actividad);
                });
            }
        });
    }

    /**
     * Crear una matriz horario.
     */
    public crearHorario(): void {
        // Primera fila: días de la semana
        this.horario.push(["", "LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES"]);

        // Primera columna: horas del día
        Array.from({ length: 29 }).forEach((_, index) => {
            const hour = Math.floor(index / 2) + 7;
            const minute = index % 2 === 0 ? "00" : "30";
            this.horario.push([`${hour}:${minute}`, "", "", "", "", ""]);
        });
    }
}