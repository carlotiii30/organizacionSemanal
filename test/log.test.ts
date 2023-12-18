import { ActividadFija } from '../src/actividad_fija';
import logger from '../src/logger';


jest.mock('../src/logger', () => ({
    info: jest.fn(),
}));

const mockLogger = logger as jest.Mocked<typeof logger>;

describe('Actividad', () => {
    it('Debería crear una instancia de ActividadFija y registrarla en log', () => {
        const actividad = new ActividadFija("Actividad", 0, "00:00", "00:00");
        expect(mockLogger.info).toHaveBeenCalledWith(expect.stringContaining('Se creó una nueva instancia de ActividadFija con descripción: Actividad'));
    });
});
