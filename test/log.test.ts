import { ActividadFija } from '../src/actividad_fija';
import { LoggerConfig } from '../src/logger';

const logger = LoggerConfig.logger;

const mockLogger = jest.spyOn(logger, 'info');

describe('ActividadFija', () => {
    it('Debería crear una instancia de ActividadFija y registrarla en log', () => {
        const actividad = new ActividadFija("Actividad", logger, 0, "00:00", "00:00");
        expect(mockLogger).toHaveBeenCalledWith(expect.stringContaining('Se creó una nueva instancia de ActividadFija con descripción: Actividad'));
    });
});
