import { Actividad, TipoActividad } from "./types";

export class OptimizadorSemanal{

    private inicioSemana: Date;
    private finSemana: Date;
    private actividades: Actividad[];

    /**
     * Constructor por defecto de la clase OptimizadorSemanal
     */
    constructor(){
        this.inicioSemana = new Date();
        this.finSemana = new Date();
        this.actividades = [];
    }

    /**
     * Agrega una actividad a la lista de actividades.
     * @param actividad Actividad a agregar.
     */
    public agregarActividad(actividad: Actividad): void{
        this.actividades.push(actividad);
    }

    /**
     * Getter de las actividades semanales.
     * @returns Lista de actividades de la semana.
     */
    public getActividades(): Actividad[]{
        return this.actividades;
    }
}

