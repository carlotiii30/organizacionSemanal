import { Test, TestingModule } from '@nestjs/testing';
import { Controlador } from '../src/controlador';
import { OptimizadorSemanal } from '../src/optimizador_semanal';
import { Actividad } from '../src/actividad';
import { ActividadFija, DiaSemana } from '../src/actividad_fija';
import { ActividadVariable } from '../src/actividad_variable';
import { LoggerConfig } from '../src/logger';

describe('Controlador', () => {
    const logger = LoggerConfig.logger;
    let controlador: Controlador;
    let optimizadorMock: Partial<OptimizadorSemanal>;

    beforeEach(async () => {
        // Crear instancias de ActividadFija, y ActividadVariable para la prueba.
        const actividadFija = new ActividadFija('Actividad Fija', logger, DiaSemana.LUNES, '08:00', '09:00');
        const actividadVariable = new ActividadVariable('Actividad Variable', logger, 2.5); // Duración de 2.5 horas

        optimizadorMock = {
            Actividades: [actividadFija, actividadVariable],
            organizarHorario: jest.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            controllers: [Controlador],
            providers: [
                {
                    provide: OptimizadorSemanal,
                    useValue: optimizadorMock,
                },
            ],
        }).compile();

        controlador = module.get<Controlador>(Controlador);
    });

    describe('obtenerTodasLasTareas', () => {
        it('debería retornar todas las actividades', () => {
            const resultado: Actividad[] = controlador.obtenerTodasLasTareas();
            expect(resultado).toEqual(optimizadorMock.Actividades);
        });
    });
});
