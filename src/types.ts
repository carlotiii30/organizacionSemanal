export enum TipoActividad {
  ESTUDIO,
  TRABAJO, 
  MEDICA, 
  DEPORTIVA,
  REUNION
}

export type Tarea = {
  titulo: string;
  descripcion: string;
}