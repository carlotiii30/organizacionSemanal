// Tests

import { OptimizadorSemanal } from '../src/optimizador_semanal';
import { TipoActividad } from '../src/tipos';
import { Archivo } from '../src/archivo';
import { Actividad } from '../src/actividad';

describe('OptimizadorSemanal', () => {
    it('debería agregar una actividad', () => {
        const optimizador = new OptimizadorSemanal();
        const actividad = new Actividad(TipoActividad.FIJA, "Estudiar para el examen", "Lunes", "10:00-12:00");

        optimizador.agregarActividad(actividad);

        expect(optimizador.getActividades()).toHaveLength(1);
    });

    it('debería extraer la información de un día', () => {
        const optimizador = new OptimizadorSemanal();
        const informacion = optimizador.extraerInformacionHorario("Lunes 10:00-12:00 Estudiar para el examen");

        expect(informacion).toEqual([{ dia: "Lunes", hora: "10:00-12:00", descripcion: "Estudiar para el examen" }])
    });

    it('debería extraer el horario de la semana', () => {
        const optimizador = new OptimizadorSemanal();
        const horario = new Archivo("./data/horario.txt");

        optimizador.extraerHorario(horario);

        expect(optimizador.getActividades()).toHaveLength(5);
        expect(optimizador.getActividades()[0].getDescripcion()).toEqual("Academia de inglés");
        expect(optimizador.getActividades()[0].getDia()).toEqual("Lunes");
        expect(optimizador.getActividades()[0].getHora()).toEqual("17:30-19:00");
    });

    it('debería extraer la información de una actividad', () => {
        const optimizador = new OptimizadorSemanal();
        const actividad = optimizador.extraerInformacionLista("Gimnasio - 2h");

        expect(actividad).toEqual([{ descripcion: "Gimnasio", duracion: 2 }]);
    });

    it('debería extraer actividades de un archivo', () => {
        const optimizador = new OptimizadorSemanal();
        const listaActividades = new Archivo("./data/actividades.txt");

        optimizador.extraerActividades(listaActividades);

        expect(optimizador.getActividades()).toHaveLength(5);
        expect(optimizador.getActividades()[0].getDescripcion()).toEqual("Gimnasio");
        expect(optimizador.getActividades()[0].getDia()).toEqual("");
        expect(optimizador.getActividades()[0].getHora()).toEqual("");
    });

    it('debería crear un horario', () => {
        const optimizador = new OptimizadorSemanal();
        const horario = optimizador.organizarHorario();

        expect(horario[0][1]).toBe("LUNES");
        expect(horario[0][5]).toBe("VIERNES");
        expect(horario[1][0]).toBe("7:00");
        expect(horario[29][0]).toBe("21:00");
    });

});
