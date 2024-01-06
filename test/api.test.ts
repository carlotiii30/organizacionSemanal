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
            const resultado: Actividad[] = controlador.obtenerTodasLasTareas() ?? [];
            expect(resultado).toEqual(optimizadorMock.Actividades);
        });
    });

    describe('crearTarea', () => {
        it('debería crear una nueva tarea', () => {
            const body = { descripcion: 'Nueva Tarea', duracion: 3 };
            const resultado: Actividad = controlador.crearTarea(body)!;

            expect(resultado).toBeInstanceOf(ActividadVariable);
        });

        it('debería manejar el caso de crear tarea sin descripción', () => {
            const body = { duracion: 3 };
            try {
                controlador.crearTarea(body);
            } catch (error: any) {
                expect(error.message).toBe('Error interno del servidor');
            }
        });

        it('debería manejar el caso de crear tarea sin duración', () => {
            const body = { descripcion: 'Nueva Tarea' };
            try {
                controlador.crearTarea(body);
            } catch (error: any) {
                expect(error.message).toBe('Error interno del servidor');
            }
        });
    });

    describe('obtenerTareaPorId', () => {
        it('debería retornar una tarea por su id', () => {
            const actividadFija = new ActividadFija('Actividad Fija', logger, DiaSemana.LUNES, '08:00', '09:00');
            const id = actividadFija.Id;

            if (optimizadorMock.Actividades != undefined)
                optimizadorMock.Actividades.push(actividadFija);

            const resultado: Actividad = controlador.obtenerTareaPorId(id)!;
            expect(resultado).toEqual(actividadFija);
        });

        it('debería manejar el caso de no encontrar una tarea', () => {
            try {
                controlador.obtenerTareaPorId(3);
            } catch (error: any) {
                expect(error.message).toBe('Error interno del servidor')
            }
        });
    });
});