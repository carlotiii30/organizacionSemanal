import { TipoTarea } from "./types";

export class Tarea{
    private titulo : string;
    private descripcion : string;
    private tipo : TipoTarea;
    private prioridad : number;
    private fecha : Date;
    private hora : string;
    private completada : boolean;
}