import { Tarea } from "./types";

export class Actividad{
    tarea: Tarea;
    fecha: Date;
    duracionEstimada: number;
    completada: boolean;
    aplazable: boolean;
}