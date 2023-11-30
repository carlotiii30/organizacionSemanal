export abstract class Actividad {

    constructor(
        private descripcion: string,
    ){}

    /**
     * Getter de la descripción de la actividad.
     * @returns Descripción de la actividad.
     */
    get Descripcion(): string {
        return this.descripcion;
    }

}
