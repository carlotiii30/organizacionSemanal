import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class Configuracion {
    /**
     * Valores de configuración.
     */
    private configValues: { [key: string]: string } = {};

    /**
     * Constructor de la clase Configuracion.
     */
    constructor() {
        const configFilePath = './config.env';

        if (fs.existsSync(configFilePath)) {
            dotenv.config({ path: configFilePath });
        } else {
            throw new Error(`El archivo de configuración ${configFilePath} no existe.`);
        }

        for (const key in process.env) {
            this.configValues[key] = process.env[key]!;
        }
    }

    /**
     * Getter de los valores de configuración.
     * @param key Clave de la variable de entorno.
     * @returns Valor de la variable de entorno.
     */
    get(key: string): string {
        if (this.configValues[key]) {
            return this.configValues[key];
        } else {
            throw new Error(`La variable de entorno ${key} no está configurada.`);
        }
    }
}
