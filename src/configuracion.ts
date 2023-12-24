import * as dotenv from 'dotenv';

dotenv.config({ debug: true });

export class Configuracion {
    private configValues: { [key: string]: string } = {
        LOG_LEVEL: 'info',
        LOG_FILE_PATH: './logs.log',
    };

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

    get(key: string): string {
        if (this.configValues[key]) {
            return this.configValues[key];
        } else {
            throw new Error(`La variable de entorno ${key} no está configurada.`);
        }
    }
}
