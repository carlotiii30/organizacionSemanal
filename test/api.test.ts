import { Test, TestingModule } from '@nestjs/testing';
import { Controlador } from '../src/controlador';
import { OptimizadorSemanal } from '../src/optimizador_semanal';
import { Actividad, ActividadId } from '../src/actividad';
import { ActividadFija, DiaSemana } from '../src/actividad_fija';
import { ActividadVariable } from '../src/actividad_variable';
import { LoggerConfig } from '../src/logger';

describe('Controlador', () => {
    const logger = LoggerConfig.logger;
    let controlador: Controlador;
    let optimizadorMock: Partial<OptimizadorSemanal>;

    beforeEach(async () => {
        // Crear instancias de ActividadFija y ActividadVariable para la prueba.
        const actividadFija = new ActividadFija('Actividad Fija', logger, DiaSemana.LUNES, '08:00', '09:00');
        const actividadVariable = new ActividadVariable('Actividad Variable', logger, 2.5);

        const horario: string[][] = [
            ["", "LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES"],
            ["07:00", "", "", "", "", ""],
            ["07:30", "", "", "", "", ""],
            ["08:00", "", "", "", "", ""],
            ["08:30", "", "", "", "", ""],
            ["09:00", "", "", "", "", ""],
            ["09:30", "", "", "", "", ""],
            ["10:00", "", "", "", "", ""],
            ["10:30", "", "", "", "", ""],
            ["11:00", "", "", "", "", ""],
            ["11:30", "", "", "", "", ""],
            ["12:00", "", "", "", "", ""],
            ["12:30", "", "", "", "", ""],
            ["13:00", "", "", "", "", ""],
            ["13:30", "", "", "", "", ""],
            ["14:00", "", "", "", "", ""],
            ["14:30", "", "", "", "", ""],
            ["15:00", "", "", "", "", ""],
            ["15:30", "", "", "", "", ""],
            ["16:00", "", "", "", "", ""],
            ["16:30", "", "", "", "", ""],
            ["17:00", "", "", "", "", ""],
            ["17:30", "", "", "", "", ""],
            ["18:00", "", "", "", "", ""],
            ["18:30", "", "", "", "", ""],
            ["19:00", "", "", "", "", ""],
            ["19:30", "", "", "", "", ""],
            ["20:00", "", "", "", "", ""],
            ["20:30", "", "", "", "", ""],
            ["21:00", "", "", "", "", ""],
        ];


        optimizadorMock = {
            Actividades: [actividadFija, actividadVariable],
            Horario: horario,
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

    describe('obtener', () => {
        it('debería retornar el horario', () => {
            const resultado: string[][] = controlador.obtener() ?? [];
            expect(resultado).toEqual(optimizadorMock.Horario);
        });
    });

    describe('organizar', () => {
        it('debería organizar el horario', () => {
            const resultado: string = controlador.organizar();
            expect(resultado).toBe('Horario organizado con éxito');
            expect(optimizadorMock.organizarHorario).toHaveBeenCalled();
        });

        it('debería manejar un error al organizar el horario', () => {
            try {
                controlador.organizar();
            } catch (error: any) {
                expect(error.message).toBe('Bad Request');
            }
        });
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
                expect(error.message).toBe('Bad Request');
            }
        });

        it('debería manejar el caso de crear tarea sin duración', () => {
            const body = { descripcion: 'Nueva Tarea' };
            try {
                controlador.crearTarea(body);
            } catch (error: any) {
                expect(error.message).toBe('Bad Request');
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
    });
});