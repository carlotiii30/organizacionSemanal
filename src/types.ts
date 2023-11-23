export enum TipoActividad {
  ESTUDIO,
  TRABAJO,
  MEDICA,
  DEPORTIVA,
  REUNION
}

export type Actividad = {
  TipoActividad: TipoActividad,
  Tarea: {
    Descripcion: string | null,
    Dia: string,
    Hora: string,
  },
}
