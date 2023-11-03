import { Tarea } from "./tarea";

export type TipoTarea = "medica" | "deportiva" | "academica" | "laboral" | "reunion" | "otro";

export type Notificacion = {
    tareaRelacionada: Tarea,
    titulo : string,
    cuerpo : string
}