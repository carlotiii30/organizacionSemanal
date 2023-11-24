import * as fs from 'fs';


export class Archivo {
    private path: string;
    private info: string | null = null;

    /**
     * Constructor de la clase Horario.
     * @param ruta Ruta del archivo a leer.
     */
    constructor(path: string) {
        this.path = path;
    }

    /**
     * Lee el archivo y guarda su contenido en la variable info.
     */
    private leerArchivo(): void {
        try {
            this.info = fs.readFileSync(this.path, 'utf8');
        } catch (error) {
            console.error(`Error al leer el archivo: ${error}`);
        }
    }

    public getInfo(): string {
        if (!this.info) {
            this.leerArchivo();
        }

        return this.info as string;
    }
}