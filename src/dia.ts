import { Tarea } from './tarea'
import { nombreDia } from './types'

export class Dia{
    private tareas: Tarea[]
    private horasOcupadas: number
    private nombreDia : nombreDia

    constructor(nombreDia: nombreDia) {
        this.tareas = [];
        this.horasOcupadas = 0;
        this.nombreDia = nombreDia;
    }
}