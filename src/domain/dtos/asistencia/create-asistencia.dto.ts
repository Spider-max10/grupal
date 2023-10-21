export class CreateAsistenciaDto {
    private constructor(
      public readonly instancia: string,
      public readonly servicio: string,
      public readonly atencion: string,
      public readonly seriesId: number,
      public readonly asistenteId: number,
      public readonly clienteId: number,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateAsistenciaDto?]  {
  
      const { instancia, servicio, atencion, seriesId, asistenteId, clienteId} = props;
  
      if ( !instancia) return ['id property is required', undefined];
  
  
      return [undefined, new CreateAsistenciaDto(instancia , servicio, atencion, seriesId, asistenteId, clienteId)];
    }
  }