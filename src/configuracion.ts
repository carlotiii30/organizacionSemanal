import * as dotenv from 'dotenv';

dotenv.config({ debug: true });

export class Configuracion {
    get(key: string): string {
        const value = process.env[key];

        if (!value) {
            // Si no se encuentra la variable en el archivo .env, intentar obtenerla de las variables de entorno de GitHub
            const githubEnvVar = process.env[`GITHUB_ENV_${key}`];

            if (githubEnvVar) {
                return githubEnvVar;
            } else {
                throw new Error(`La variable de entorno ${key} no está configurada.`);
            }
        } else {
            return value;
        }
    }
}