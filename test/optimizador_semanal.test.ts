// Tests

import { OptimizadorSemanal } from '../src/optimizador_semanal';
import { Archivo } from '../src/archivo';

describe('OptimizadorSemanal', () => {
    it('debería crear un horario con actividades fijas', () => {
        const optimizador = new OptimizadorSemanal();
        const horario = new Archivo("./data/horario.txt");

        optimizador.extraerHorario(horario);

        optimizador.organizarHorario();

        const expectedHorario = [
            ["", "LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES"],
            ["7:00", "", "", "", "", ""],
            ["7:30", "", "", "", "", ""],
            ["8:00", "", "", "", "", ""],
            ["8:30", "", "", "", "Facultad", "Facultad"],
            ["9:00", "", "", "", "Facultad", "Facultad"],
            ["9:30", "", "", "", "Facultad", "Facultad"],
            ["10:00", "", "", "", "Facultad", "Facultad"],
            ["10:30", "", "", "", "Facultad", "Facultad"],
            ["11:00", "", "", "", "Facultad", "Facultad"],
            ["11:30", "", "", "", "Facultad", "Facultad"],
            ["12:00", "", "", "", "Facultad", "Facultad"],
            ["12:30", "", "", "", "Facultad", "Facultad"],
            ["13:00", "", "", "", "Facultad", "Facultad"],
            ["13:30", "", "", "", "Facultad", "Facultad"],
            ["14:00", "", "", "", "Facultad", "Facultad"],
            ["14:30", "", "", "", "", ""],
            ["15:00", "", "", "", "", ""],
            ["15:30", "", "", "", "Facultad", ""],
            ["16:00", "", "", "", "Facultad", ""],
            ["16:30", "", "", "", "Facultad", ""],
            ["17:00", "", "", "", "Facultad", ""],
            ["17:30", "Academia de inglés", "", "Academia", "", ""],
            ["18:00", "Academia de inglés", "", "Academia", "", ""],
            ["18:30", "Academia de inglés", "", "Academia", "", ""],
            ["19:00", "", "", "", "", ""],
            ["19:30", "", "", "", "", ""],
            ["20:00", "", "", "", "", ""],
            ["20:30", "", "", "", "", ""],
            ["21:00", "", "", "", "", ""]
        ]

        expect(optimizador.horario).toEqual(expectedHorario);
    });

    it('debería crear un horario con todas las actividades de la lista', () => {
        const optimizador = new OptimizadorSemanal();
        const horario = new Archivo("./data/horario.txt");
        const lista = new Archivo("./data/actividades.txt");

        optimizador.extraerHorario(horario);
        optimizador.extraerActividades(lista);

        optimizador.organizarHorario();

        // Comprobar que todas las actividades están en el horario.
        (optimizador.actividades).forEach(actividad => {
            const diaIndex = ((optimizador.horario)[0]).indexOf(actividad.dia);
            const horaIndex = (optimizador.horario).findIndex(hora => actividad.hora[0] === actividad.hora);

            const finalDiaIndex = diaIndex !== -1 ? diaIndex : null;
            const finalHoraIndex = horaIndex !== -1 ? horaIndex : null;

            if (finalDiaIndex != null && finalHoraIndex != null) {
                const actividadEnHorario = (optimizador.horario)[finalDiaIndex][finalHoraIndex];

                expect(actividadEnHorario).toEqual(actividad.descripcion);
            }
        });
    });
});
