// Tests

import { OptimizadorSemanal } from '../src/optimizador_semanal';
import { TipoActividad } from '../src/types';
import { Horario } from '../src/horario';

describe('OptimizadorSemanal', () => {
    it('debería agregar una actividad', () => {
        const optimizador = new OptimizadorSemanal();
        optimizador.agregarActividad({
            TipoActividad: TipoActividad.ESTUDIO,
            Tarea: {
                Descripcion: "Estudiar para el examen",
                Dia: "Lunes",
                Hora: "10:00-12:00"
            },
        });

        expect(optimizador.getActividades()).toHaveLength(1);
    });

    it('debería extraer la información de un día', () => {
        const optimizador = new OptimizadorSemanal();
        const informacion = optimizador.extraerInformacion("Lunes 10:00-12:00 Estudiar para el examen", "Lunes");

        expect(informacion).toEqual([{ hora: "10:00-12:00", actividad: "Estudiar para el examen" }]);
    });

    it ('debería extraer el horario de la semana', () => {
        const optimizador = new OptimizadorSemanal();
        const horario = new Horario("/data/horario.txt");

        optimizador.extraerHorario();

        expect(optimizador.getActividades()).toHaveLength(6);
    });

});
