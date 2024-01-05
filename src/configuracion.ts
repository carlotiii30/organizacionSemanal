import pino from 'pino';
import * as dotenv from 'dotenv';

dotenv.config({ debug: true });

export class Configuracion {
    /**
     * Valores de configuración.
     */
    private configValues: { [key: string]: string } = {
        LOG_LEVEL: 'info',
    };

    /**
     * Constructor de la clase Configuracion.
     */
    constructor() {
        for (const key in this.configValues) {
            if (process.env[key]) {
                this.configValues[key] = process.env[key]!;
            } else {
                const githubEnvVar = process.env[`GITHUB_ENV_${key}`];
                if (githubEnvVar) {
                    this.configValues[key] = githubEnvVar;
                } else {
                    throw new Error(`La variable de entorno ${key} no está configurada.`);
                }
            }
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