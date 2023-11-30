import { Archivo } from "./archivo";
import { Actividad } from "./actividad";
import { ActividadFija } from "./actividad_fija";
import { ActividadVariable } from "./actividad_variable";

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
        if (actividad.Descripcion == null)
            throw new Error("La actividad debe tener una descripción.");

        this.actividades.push(actividad);
    }

    /**
     * Getter de las actividades semanales.
     * @returns Lista de actividades de la semana.
     */
    get Actividades(): Actividad[] {
        return this.actividades;
    }

    /**
     * Getter del horario.
     * @returns horario.
     */
    get Horario(): string[][] {
        return this.horario;
    }


    /**
     * Extrae la información de un día.
     * @param info Contenido del horario a extraer la información.
     * @param dia Día de la semana a extraer la información.
     * @returns Lista de objetos con 'día', 'hora' y 'descripcion'.
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
     * @param horario horario a extraer.
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
                    const actividad = new ActividadFija(info.descripcion, info.dia, info.hora);
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
                    const actividad = new ActividadVariable(info.descripcion, info.duracion);
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

        const horaFin = 21;
        const horaInicio = 7;
        const intervalo = horaFin - horaInicio;

        // Primera columna: horas del día
        Array.from({ length: intervalo * 2 + 1 }).forEach((_, index) => {
            const hour = Math.floor(index / 2) + 7;
            const minute = index % 2 === 0 ? "00" : "30";
            this.horario.push([`${hour}:${minute}`, "", "", "", "", ""]);
        });
    }

    /**
     * Calcula la duración de la actividad.
     * @returns Duración calculada de la actividad.
     */
    calcularDuracion(hora: string): number | undefined {
        const horaInicio = hora.split(/-/)[0];
        const horaFin = hora.split(/-/)[1];

        const horaIniciohoras = parseInt(horaInicio.split(/:/)[0]);
        const horaInicioMinutos = parseInt(horaInicio.split(/:/)[1]);

        const horaFinhoras = parseInt(horaFin.split(/:/)[0]);
        const horaFinMinutos = parseInt(horaFin.split(/:/)[1]);

        const duracionhoras = horaFinhoras - horaIniciohoras;
        const duracionMinutos = horaFinMinutos - horaInicioMinutos;

        return duracionhoras + duracionMinutos / 60;
    }

    /**
     * Asigna una actividad fija al horario.
     * @param horario horario a asignar la actividad.
     * @param diaIndex Indice del día en el horario.
     * @param horaIndex Indice de la hora en el horario.
     * @param duracion Duración de la actividad.
     * @param descripcion Descripción de la actividad.
     */
    private asignarActividadFija(horario: string[][], hora: string, diaIndex: number | null, horaIndex: number | null, descripcion: string): void {
        if (diaIndex == null || horaIndex == null)
            throw new Error("El día o la hora no existen.");

        console.log(diaIndex, horaIndex);
        const duracion = this.calcularDuracion(hora);

        if (duracion != null) {
            horario
                .slice(horaIndex, horaIndex + (duracion * 2))
                .forEach((row) => row[diaIndex] = descripcion || "");
        }
    }

    /**
     * Obtiene las celdas disponibles del horario.
     * @param horario horario a obtener las celdas disponibles.
     * @returns Lista de celdas disponibles.
     */
    public obtenerCeldasDisponibles(horario: string[][]): { rowIndex: number, cellIndex: number }[] {
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
     * @param horario horario a asignar la actividad.
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

        const fijas = this.actividades.filter(actividad => actividad instanceof ActividadFija) as ActividadFija[];
        const variables = this.actividades.filter(actividad => actividad instanceof ActividadVariable) as ActividadVariable[];

        // Asignación de actividades fijas
        fijas.forEach(actividad => {
            const dia = actividad.Dia;
            const hora = actividad.Hora;
            const descripcion = actividad.Descripcion;

            const diaIndex = this.horario[0].findIndex(d => d.toUpperCase() === dia.toUpperCase());
            const horaInicioActividad = hora.split("-")[0];
            const horaIndex = this.horario.findIndex((row) => row[0] === horaInicioActividad);

            const finalDiaIndex = diaIndex !== -1 ? diaIndex : null;
            const finalHoraIndex = horaIndex !== -1 ? horaIndex : null;

            this.asignarActividadFija(this.horario, hora, finalDiaIndex, finalHoraIndex, descripcion);
        });

        // Asignación de actividades variables
        variables.forEach(actividad => {
            const descripcion = actividad.Descripcion;
            const duracion = actividad.Duracion;

            if (duracion != undefined)
                this.asignarActividadVariable(this.horario, descripcion, duracion);
        });
    }

}