import { TipoTarea } from "./types";

export class Tarea{
    private titulo : string;
    private descripcion : string;
    private tipo : TipoTarea;
    private prioridad : number;
    private fecha : Date;
    private hora : string;
    private completada : boolean;

    constructor(titulo : string, descripcion : string, tipo : TipoTarea, 
        prioridad : number, fecha : Date, hora : string, completada : boolean){

        this.titulo = titulo;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.prioridad = prioridad;
        this.fecha = fecha;
        this.hora = hora;
        this.completada = completada;
    }
}