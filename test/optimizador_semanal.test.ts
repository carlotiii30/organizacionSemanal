// Tests

import { OptimizadorSemanal } from '../src/optimizador_semanal';
import { TipoActividad } from '../src/types';

describe('OptimizadorSemanal', () => {
    it('debería agregar una actividad', () => {
        const optimizador = new OptimizadorSemanal();
        optimizador.agregarActividad({
            TipoActividad: TipoActividad.ESTUDIO,
            Tarea: ['Estudiar para el examen', new Date(2023, 9, 1, 10, 0)],
        });

        expect(optimizador.getActividades()).toHaveLength(1);
    });

    it('debería lanzar una exepción si la actividad no tiene una tarea', () => {
        const optimizador = new OptimizadorSemanal();

        try {
            optimizador.agregarActividad({
                TipoActividad: TipoActividad.ESTUDIO,
                Tarea: ["", new Date()],
            });

            expect(true).toBe(false);
        } catch (error: unknown) {
            const castedError = error as Error;

            expect(castedError instanceof Error).toBe(true);
            expect(castedError.message).toBe('La actividad debe tener una tarea');
        }
    });

});
