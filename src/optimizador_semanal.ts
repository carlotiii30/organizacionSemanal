import { Actividad } from "./actividad";
import { ActividadFija, DiaSemana } from "./actividad_fija";
import { ActividadVariable } from "./actividad_variable";

export class OptimizadorSemanal {

    private actividades: Actividad[];
    private horario: string[][];

    /**
     * Constructor por defecto de la clase OptimizadorSemanal
     */
    constructor(actividades: Actividad[]) {
        this.actividades = actividades;
        this.horario = [];

        this.crearHorario();
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
    calcularDuracion(horaInicio: string, horaFin: string): number | undefined {
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
    private asignarActividadFija(horario: string[][], dia: DiaSemana, horaInicio: string, horaFin: string, descripcion: string): void {
        const diaIndex = this.horario[0].findIndex(d => d === DiaSemana[dia]);
        const horaIndex = this.horario.findIndex((row) => row[0] === horaInicio);

        const finalDiaIndex = diaIndex !== -1 ? diaIndex : null;
        const finalHoraIndex = horaIndex !== -1 ? horaIndex : null;

        if (finalDiaIndex == null || finalHoraIndex == null)
            throw new Error("El día o la hora no existen.");

        const duracion = this.calcularDuracion(horaInicio, horaFin);

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
        const fijas = this.actividades.filter(actividad => actividad instanceof ActividadFija) as ActividadFija[];
        const variables = this.actividades.filter(actividad => actividad instanceof ActividadVariable) as ActividadVariable[];

        // Asignación de actividades fijas
        fijas.forEach(actividad => {
            const dia = actividad.Dia;
            const descripcion = actividad.Descripcion;
            const horaInicio = actividad.HoraInicio;
            const horaFin = actividad.HoraFin;

            this.asignarActividadFija(this.horario, dia, horaInicio, horaFin, descripcion);
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