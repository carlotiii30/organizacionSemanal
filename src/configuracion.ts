import * as dotenv from 'dotenv';
import * as fs from 'fs';

const DEFAULT_CONFIG_FILE_PATH = './config.env';

/**
 * Clase que maneja la configuración de la aplicación.
 */
export class Configuracion {
    /**
     * Valores de configuración.
     */
    private configValues: { [key: string]: string } = {};

    /**
     * Constructor de la clase Configuracion.
     * @param {string} configFilePath Ruta del archivo de configuración. Si no se proporciona, se utiliza el valor por defecto.
     */
    constructor(configFilePath: string = DEFAULT_CONFIG_FILE_PATH) {
        this.loadConfig(configFilePath);
    }


    /**
     * Carga la configuración desde el archivo.
     * @private
     * @param {string} configFilePath Ruta del archivo de configuración.
     */
    private loadConfig(configFilePath: string): void {
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
     * Obtiene el valor de la variable de entorno.
     * @param {string} key Clave de la variable de entorno.
     * @returns {string} Valor de la variable de entorno.
     * @throws {Error} Si la variable de entorno no está configurada.
     */
    get(key: string): string {
        if (this.configValues[key]) {
            return this.configValues[key];
        } else {
            throw new Error(`La variable de entorno ${key} no está configurada.`);
        }
    }
}
