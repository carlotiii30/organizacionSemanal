// Tests

import { OptimizadorSemanal } from '../src/optimizador_semanal';
import { Archivo } from '../src/archivo';
import { ActividadFija, DiaSemana } from '../src/actividad_fija';


describe('OptimizadorSemanal', () => {
    it('debería crear un horario con todas las actividades de la lista', () => {
        const optimizador = new OptimizadorSemanal();
        const horario = new Archivo("./data/horario.txt");
        const lista = new Archivo("./data/actividades.txt");

        optimizador.extraerHorario(horario);
        optimizador.extraerActividades(lista);

        optimizador.organizarHorario();

        optimizador.Actividades.forEach(actividad => {
            const descripcion = actividad.Descripcion;

            const actividadEnHorario = optimizador.Horario
                .flat()
                .find(cell => cell === descripcion);

            expect(actividadEnHorario).toEqual(descripcion);
        });
    });
});