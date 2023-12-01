import { OptimizadorSemanal } from '../src/optimizador_semanal';
import { ActividadFija, DiaSemana } from '../src/actividad_fija';
import { ActividadVariable } from '../src/actividad_variable';
import { Actividad } from '../src/actividad';
import * as fs from 'fs';

describe('Verificar Horario', () => {

    const convertirDiaSemana = (dia: string): DiaSemana => {
        switch (dia) {
            case "Lunes":
                return DiaSemana.LUNES;
            case "Martes":
                return DiaSemana.MARTES;
            case "Miercoles":
                return DiaSemana.MIERCOLES;
            case "Jueves":
                return DiaSemana.JUEVES;
            case "Viernes":
                return DiaSemana.VIERNES;
            default:
                throw new Error("El día no existe.");
        }
    };

    const extraerInformacionHorario = (info: string): { dia: string; horaInicio: string; horaFin: string; descripcion: string } => {
        if (info == null)
            throw new Error("El horario debe tener información.");

        const partes = info.split(/ /);
        const dia = partes[0];
        const horaInicio = partes[1].split("-")[0];
        const horaFin = partes[1].split("-")[1];
        const descripcion = partes.slice(2).join(" ");

        return { dia: dia, horaInicio: horaInicio, horaFin: horaFin, descripcion: descripcion };
    };

    const extraerInformacionLista = (info: string): { descripcion: string, duracion: number } => {
        if (info == null)
            throw new Error("La lista debe tener información.");

        const partes = info.split(/-/);
        const duracion = parseInt(partes[1].slice(0, -1));
        const descripcion = partes[0].slice(0, -1);

        return { descripcion: descripcion, duracion: duracion };
    };

    const extraerActividades = (archivo: string): Actividad[] => {
        try {
            const contenido = fs.readFileSync(archivo, 'utf8');
            let actividades: Actividad[] = [];

            if (contenido == null)
                throw new Error("La lista debe tener información.");

            const lineas = contenido.split(/\n/);

            lineas.forEach(linea => {
                const informacion = extraerInformacionLista(linea);

                if (informacion) {
                    actividades.push(new ActividadVariable(informacion.descripcion, informacion.duracion));
                }
            });

            return actividades;
        }
        catch (error) {
            throw new Error(`Error al leer el archivo: ${error}`);
        }
    };

    const extraerHorario = (archivo: string): Actividad[] => {
        try {
            const contenido = fs.readFileSync(archivo, 'utf8');
            let actividades: Actividad[] = [];

            if (contenido == null)
                throw new Error("El horario debe tener información.");

            const lineas = contenido.split(/\n/);

            lineas.forEach(linea => {
                const info = extraerInformacionHorario(linea);

                if (info) {
                    const dia = convertirDiaSemana(info.dia);
                    actividades.push(new ActividadFija(info.descripcion, dia, info.horaInicio, info.horaFin));
                }
            });

            return actividades;
        }
        catch (error) {
            throw new Error(`Error al leer el archivo: ${error}`);
        }
    };

    it('debería comprobar que las actividades fijas estén en el horario correcto y que las variables no se solapen con las fijas', () => {
        const actividadesFijas = extraerHorario("data/horario.txt");
        const actividadesVariables = extraerActividades("data/actividades.txt");

        const todasActividades = actividadesFijas.concat(actividadesVariables);
        const optimizador = new OptimizadorSemanal(todasActividades);

        const horario = optimizador.Horario;

        optimizador.organizarHorario();

        actividadesFijas.forEach(actividad => {
            if (actividad instanceof ActividadFija) {
                const dia = actividad.Dia + 1; // Hay que tener en cuenta que la primera columna es para las horas.
                const horaInicio = actividad.HoraInicio;
                const horaFin = actividad.HoraFin;
                const descripcion = actividad.Descripcion;

                const horaInicioSplit = horaInicio.split(":");
                const horaFinSplit = horaFin.split(":");

                const horaInicioNum = parseInt(horaInicioSplit[0]);
                const horaFinNum = parseInt(horaFinSplit[0]);

                const horaInicioMinutos = parseInt(horaInicioSplit[1]);
                const horaFinMinutos = parseInt(horaFinSplit[1]);

                const horaInicioIndex = horaInicioNum - 7;
                const horaFinIndex = horaFinNum - 7;

                const horaInicioMinutosIndex = horaInicioMinutos / 30;
                const horaFinMinutosIndex = horaFinMinutos / 30;

                const horaInicioIndexTotal = horaInicioIndex * 2 + horaInicioMinutosIndex + 1; // Hay que tener en cuenta que la primera fila es para los días.
                const horaFinIndexTotal = horaFinIndex * 2 + horaFinMinutosIndex + 1;

                for (let i = horaInicioIndexTotal; i < horaFinIndexTotal; i++) {
                    expect(horario[i][dia]).toBe(descripcion);
                }
            }
        });

        actividadesVariables.forEach(actividad => {
            const descripcion = actividad.Descripcion;

            const actividadEnHorario = optimizador.Horario
                .flat()
                .find(cell => cell === descripcion);
            expect(actividadEnHorario).toEqual(descripcion);
        });
    });
});
