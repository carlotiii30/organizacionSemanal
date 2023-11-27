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

        expect(optimizador.actividades).toHaveLength(1);
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

        expect(optimizador.actividades).toHaveLength(5);
        expect(optimizador.actividades[0].descripcion).toEqual("Academia de inglés");
        expect(optimizador.actividades[0].dia).toEqual("Lunes");
        expect(optimizador.actividades[0].hora).toEqual("17:30-19:00");
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

        expect(optimizador.actividades).toHaveLength(5);
        expect(optimizador.actividades[0].descripcion).toEqual("Gimnasio");
        expect(optimizador.actividades[0].dia).toEqual("");
        expect(optimizador.actividades[0].hora).toEqual("");
    });

    it('debería crear un horario', () => {
        const optimizador = new OptimizadorSemanal();
        optimizador.crearHorario();

        expect(optimizador.horario[0][1]).toBe("LUNES");
        expect(optimizador.horario[0][5]).toBe("VIERNES");
        expect(optimizador.horario[1][0]).toBe("7:00");
        expect(optimizador.horario[29][0]).toBe("21:00");
    });

    it ('debería agregar una actividad fija al horario', () => {
        const optimizador = new OptimizadorSemanal();
        const actividad = new Actividad(TipoActividad.FIJA, "Estudiar para el examen", "Lunes", "10:00-12:00");

        optimizador.agregarActividad(actividad);
        optimizador.organizarHorario();

        expect(optimizador.horario[7][1]).toBe("Estudiar para el examen");
        expect(optimizador.horario[8][1]).toBe("Estudiar para el examen");
        expect(optimizador.horario[9][1]).toBe("Estudiar para el examen");
        expect(optimizador.horario[10][1]).toBe("Estudiar para el examen");
    });

    it ('debería agregar una actividad variable al horario', () => {
        const optimizador = new OptimizadorSemanal();
        const actividad = new Actividad(TipoActividad.VARIABLE, "Gimnasio", "", "");

        actividad.setDuracion(2);
        optimizador.agregarActividad(actividad);
        optimizador.organizarHorario();

        expect(optimizador.horario[1][1]).toBe("Gimnasio");
    });

    it ('debería crear un horario funcional con actividades fijas y variables', () => {
        const optimizador = new OptimizadorSemanal();
        const horario = new Archivo("./data/horario.txt");
        const listaActividades = new Archivo("./data/actividades.txt");

        optimizador.extraerHorario(horario);
        optimizador.extraerActividades(listaActividades);

        optimizador.organizarHorario();

        expect(optimizador.horario[22][1]).toBe("Academia de inglés");
        expect(optimizador.horario[23][1]).toBe("Academia de inglés");
        expect(optimizador.horario[24][1]).toBe("Academia de inglés");

        expect(optimizador.horario[22][3]).toBe("Academia");
        expect(optimizador.horario[23][3]).toBe("Academia");
        expect(optimizador.horario[24][3]).toBe("Academia");

        expect(optimizador.horario[4][4]).toBe("Facultad");
        expect(optimizador.horario[5][4]).toBe("Facultad");
        expect(optimizador.horario[6][4]).toBe("Facultad");
        expect(optimizador.horario[7][4]).toBe("Facultad");
        expect(optimizador.horario[8][4]).toBe("Facultad");
        expect(optimizador.horario[9][4]).toBe("Facultad");
        expect(optimizador.horario[10][4]).toBe("Facultad");
        expect(optimizador.horario[11][4]).toBe("Facultad");
        expect(optimizador.horario[12][4]).toBe("Facultad");
        expect(optimizador.horario[13][4]).toBe("Facultad");
        expect(optimizador.horario[14][4]).toBe("Facultad");
        expect(optimizador.horario[15][4]).toBe("Facultad");
        expect(optimizador.horario[18][4]).toBe("Facultad");
        expect(optimizador.horario[19][4]).toBe("Facultad");
        expect(optimizador.horario[20][4]).toBe("Facultad");
        expect(optimizador.horario[21][4]).toBe("Facultad");
    });
});
