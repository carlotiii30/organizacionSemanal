import { TipoActividad } from "./tipos";
import { Archivo } from "./archivo";
import { Actividad } from "./actividad";

export class OptimizadorSemanal {

    private Actividades: Actividad[];
    private Horario: string[][];

    /**
     * Constructor por defecto de la clase OptimizadorSemanal
     */
    constructor() {
        this.Actividades = [];
        this.Horario = [];
    }

    /**
     * Agrega una actividad a la lista de actividades.
     * @param actividad Actividad a agregar.
     */
    public agregarActividad(actividad: Actividad): void {
        if (actividad.descripcion == null)
            throw new Error("La actividad debe tener una descripción.");

        this.Actividades.push(actividad);
    }

    /**
     * Getter de las actividades semanales.
     * @returns Lista de actividades de la semana.
     */
    get actividades(): Actividad[] {
        return this.Actividades;
    }

    /**
     * Getter del horario.
     * @returns Horario.
     */
    get horario(): string[][] {
        return this.Horario;
    }


    /**
     * Extrae la información de un día.
     * @param info Contenido del horario a extraer la información.
     * @param dia Día de la semana a extraer la información.
     * @returns Lista de objetos con 'hora' y 'descripcion'.
     */
    public extraerInformacionHorario(info: string): { dia: string; hora: string; descripcion: string }[] | null {
        if (info == null)
            throw new Error("El horario debe tener información.");

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

        if (contenido == null)
            throw new Error("El horario debe tener información.");

        const lineas = contenido.split(/\n/);

        lineas.forEach(linea => {
            const informacion = this.extraerInformacionHorario(linea);

            if (informacion) {
                informacion.forEach((info) => {
                    const actividad = new Actividad(TipoActividad.FIJA, { info.descripcion, info.dia, info.hora });
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
        if (info == null)
            throw new Error("La lista debe tener información.");

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

        if (contenido == null)
            throw new Error("La lista debe tener información.");

        const lineas = contenido.split(/\n/);

        lineas.forEach(linea => {
            const informacion = this.extraerInformacionLista(linea);

            if (informacion) {
                informacion.forEach((info) => {
                    const actividad = new Actividad(TipoActividad.VARIABLE, info.descripcion, "", "", info.duracion);
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

    /**
     * Asigna una actividad fija al horario.
     * @param horario Horario a asignar la actividad.
     * @param diaIndex Indice del día en el horario.
     * @param horaIndex Indice de la hora en el horario.
     * @param duracion Duración de la actividad.
     * @param descripcion Descripción de la actividad.
     */
    private asignarActividadFija(horario: string[][], diaIndex: number | null, horaIndex: number | null, duracion: number, descripcion: string): void {
        if (diaIndex != null && horaIndex != null && duracion) {
            horario
                .slice(horaIndex, horaIndex + (duracion * 2))
                .forEach((row) => row[diaIndex] = descripcion || "");
        }
    }

    /**
     * Obtiene las celdas disponibles del horario.
     * @param horario Horario a obtener las celdas disponibles.
     * @returns Lista de celdas disponibles.
     */
    private obtenerCeldasDisponibles(horario: string[][]): { rowIndex: number, cellIndex: number }[] {
        const celdasDisponibles: { rowIndex: number, cellIndex: number }[] = [];
        horario.forEach((row, rowIndex) => {
            if (rowIndex > 0) {
                row.forEach((cell, cellIndex) => {
                    if (cell === "" && cellIndex > 0) {
                        celdasDisponibles.push({ rowIndex, cellIndex });
                    }
                });
            }
        });
        return celdasDisponibles;
    }

    /**
     * Asigna una actividad variable al horario.
     * @param horario Horario a asignar la actividad.
     * @param descripcion Descripción de la actividad.
     * @param duracion Duración de la actividad.
     */
    private asignarActividadVariable(horario: string[][], descripcion: string, duracion: number): void {
        const celdasDisponibles = this.obtenerCeldasDisponibles(horario);

        while (duracion > 0 && celdasDisponibles.length > 0) {
            const celda = celdasDisponibles.shift();
            if (celda != undefined) {
                horario[celda.rowIndex][celda.cellIndex] = descripcion || "";
                duracion -= 0.5;
            }
        }
    }

    /**
     * Asignación de horas.
     */
    public organizarHorario(): void {
        this.crearHorario();

        const fijas = this.actividades.filter(actividad => actividad.tipo == TipoActividad.FIJA);
        const variables = this.actividades.filter(actividad => actividad.tipo == TipoActividad.VARIABLE);

        // Asignación de actividades fijas
        fijas.forEach(actividad => {
            const dia = actividad.dia;
            const hora = actividad.hora;
            const descripcion = actividad.descripcion;

            const diaIndex = this.horario[0].findIndex(d => d.toUpperCase() === dia.toUpperCase());
            const horaInicioActividad = hora.split("-")[0];
            const horaIndex = this.horario.findIndex((row) => row[0] === horaInicioActividad);

            const finalDiaIndex = diaIndex !== -1 ? diaIndex : null;
            const finalHoraIndex = horaIndex !== -1 ? horaIndex : null;

            let duracion = actividad.duracion;

            if (actividad.duracion === undefined)
                duracion = actividad.calcularDuracion();

            if (duracion != undefined)
                this.asignarActividadFija(this.horario, finalDiaIndex, finalHoraIndex, duracion, descripcion);
        });

        // Asignación de actividades variables
        variables.forEach(actividad => {
            const descripcion = actividad.descripcion;
            let duracion = actividad.duracion;

            if (!duracion) {
                duracion = actividad.calcularDuracion();
            }

            if (duracion != undefined)
                this.asignarActividadVariable(this.horario, descripcion, duracion);
        });
    }

}