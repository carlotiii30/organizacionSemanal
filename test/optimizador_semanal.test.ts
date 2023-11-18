// Tests

import { OptimizadorSemanal } from '../src/optimizador_semanal';
import { TipoActividad } from '../src/types';

// Agregar una actividad
describe('OptimizadorSemanal', () => {
    it('debería agregar una actividad', () => {
        const optimizador = new OptimizadorSemanal();
        optimizador.agregarActividad({
            TipoActividad: TipoActividad.ESTUDIO,
            Tarea: ['Estudiar para el examen', new Date(2023, 9, 1, 10, 0)],
        });

        expect(optimizador.getActividades()).toHaveLength(1);
    });
});
