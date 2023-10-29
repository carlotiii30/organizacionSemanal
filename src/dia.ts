import { Tarea } from './tarea'
import { nombreDia } from './types'

export class Dia{
    private tareas: Tarea[]
    private nombreDia : nombreDia

    constructor(nombreDia: nombreDia) {
        this.tareas = [];
        this.nombreDia = nombreDia;
    }
}