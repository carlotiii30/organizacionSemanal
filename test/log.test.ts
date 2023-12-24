import { ActividadFija } from '../src/actividad_fija';
import { LoggerConfig } from '../src/logger';
import { ActividadVariable } from '../src/actividad_variable';

const logger = LoggerConfig.logger;

const mockLogger = jest.spyOn(logger, 'info');
const mockLoggerError = jest.spyOn(logger, 'error');

describe('ActividadFija', () => {
    it('Debería crear una instancia de ActividadFija y registrarla en log', () => {
        const actividad = new ActividadFija("Actividad", logger, 0, "00:00", "00:00");
        expect(mockLogger).toHaveBeenCalledWith(expect.stringContaining('Se creó una nueva instancia de ActividadFija con descripción: Actividad'));
    });

    it('Debería registrar un error en log si se crea una instancia de ActividadVariable con duración menor que 0', () => {
        expect(() => new ActividadVariable("Actividad", logger, -1)).toThrowError('La duración de la actividad no puede ser null ni menor que 0.');
        expect(mockLoggerError).toHaveBeenCalledWith(expect.stringContaining('La duración de la actividad no puede ser null ni menor que 0.'));
    });
});