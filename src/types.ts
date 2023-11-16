export enum TipoActividad {
  ESTUDIO,
  TRABAJO, 
  MEDICA, 
  DEPORTIVA,
  REUNION
}

export type Actividad = {
  TipoActividad: TipoActividad,
  Tarea: [string, Date],
}