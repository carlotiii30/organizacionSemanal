export enum TipoTarea{
    MEDICA,
    DEPORTIVA,
    ACADEMICA,
    LABORAL,
    REUINION,
    OTRO
}

export type Notificacion = {
    titulo : string,
    cuerpo : string
}