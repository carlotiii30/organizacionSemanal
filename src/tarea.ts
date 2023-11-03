import { TipoTarea } from "./types";

export class Tarea{
    private titulo : string;
    private descripcion : string;
    private tipoTarea : TipoTarea;
    private prioridad : number;
    private fecha : Date;
    private hora : string;
    private completada : boolean;
}