import * as dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde el archivo .env

export class Configuracion {

    // Get genérico
    get(key: string): string {
        return process.env[key] || '';
    }

}