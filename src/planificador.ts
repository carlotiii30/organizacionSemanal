import { Semana } from "./semana";
import { Notificacion } from "./types";

export class Planificador{
    private semana : Semana;
    private notificaciones : Notificacion[];

    constructor(semana : Semana, notificaciones : Notificacion[]){
        this.semana = semana;
        this.notificaciones = notificaciones;
    }
}