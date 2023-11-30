import { Archivo } from "./archivo";
import { Actividad } from "./actividad";
import { ActividadFija, DiaSemana } from "./actividad_fija";
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
    public extraerInformacionHorario(info: string): { dia: string; horaInicio: string; horaFin: string; descripcion: string } {
        if (info == null)
            throw new Error("El horario debe tener información.");

        const partes = info.split(/ /);
        const dia = partes[0];
        const horaInicio = partes[1].split("-")[0];
        const horaFin = partes[1].split("-")[1];
        const descripcion = partes.slice(2).join(" ");

        return { dia: dia, horaInicio: horaInicio, horaFin: horaFin, descripcion: descripcion };
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
            const info = this.extraerInformacionHorario(linea);

            if (info) {
                const dia = this.convertirDiaSemana(info.dia);
                const actividad = new ActividadFija(info.descripcion, dia, info.horaInicio, info.horaFin);
                this.actividades.push(actividad);
            }
        });
    }

    /**
     * Convierte un día de la semana a su enumeración.
     * @param dia Día de la semana a convertir.
     * @returns Día de la semana convertido.
     */
    private convertirDiaSemana(dia: string): DiaSemana {
        switch (dia) {
            case "Lunes":
                return DiaSemana.Lunes;
            case "Martes":
                return DiaSemana.Martes;
            case "Miercoles":
                return DiaSemana.Miercoles;
            case "Jueves":
                return DiaSemana.Jueves;
            case "Viernes":
                return DiaSemana.Viernes;
            default:
                throw new Error("El día no existe.");
        }
    }

    /**
     * Extrae la información de una lista de actividades.
     * @param info Contenido de la lista.
     * @returns Descripcion y duración de las actividades.
     */
    public extraerInformacionLista(info: string): { descripcion: string, duracion: number } {
        if (info == null)
            throw new Error("La lista debe tener información.");

        const partes = info.split(/-/);
        const duracion = parseInt(partes[1].slice(0, -1));
        const descripcion = partes[0].slice(0, -1);

        return { descripcion: descripcion, duracion: duracion };
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
                this.actividades.push(new ActividadVariable(informacion.descripcion, informacion.duracion));
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
        this.crearHorario();

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