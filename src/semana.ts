import { Dia } from './dia';

export class Semana {
    private dias : Dia[];
    private horasEjercicio : number;

    constructor() {
        this.dias = [];
        this.horasEjercicio = 0;

        this.dias.push(new Dia("lunes"));
        this.dias.push(new Dia("martes"));
        this.dias.push(new Dia("miercoles"));
        this.dias.push(new Dia("jueves"));
        this.dias.push(new Dia("viernes"));
        this.dias.push(new Dia("sabado"));
        this.dias.push(new Dia("domingo"));     
    }
}