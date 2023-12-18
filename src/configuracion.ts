export class Configuracion {
    private logLevel: string;
    private logFilePath: string;

    constructor() {
        this.logLevel = process.env.LOG_LEVEL || 'info';
        this.logFilePath = process.env.LOG_FILE_PATH || './logs.log';
    }

    get LogLevel(): string {
        return this.logLevel;
    }

    get LogFilePath(): string {
        return this.logFilePath;
    }
}