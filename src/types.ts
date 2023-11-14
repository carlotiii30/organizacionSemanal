export type Actividad = {
    titulo: string;
    descripcion: string;
    fechaRealizacion: Date;
    duracionEstimada: number;
    aplazable: boolean;
    completada: boolean;
  };

export type Tarea = {
  titulo: string;
  descripcion: string;
}