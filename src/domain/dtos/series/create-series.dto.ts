export class CreateSeriesIdDto {
    private constructor(
      public readonly consumible : string,
      public readonly tipo: string,
      public readonly conexion: string,
      public readonly modeloId: number,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateSeriesIdDto?]  {
  
      const { consumible, tipo,conexion,modeloId} = props;
  
      if ( !consumible) return ['id property is required', undefined];
  
  
      return [undefined, new CreateSeriesIdDto(consumible,tipo,conexion,modeloId)];
    }
  }