export class CreateAsistenteIdDto {
    private constructor(
      public readonly caracteristicas: string,
      public readonly descripcion: string,
      public readonly soporte: string,
      public readonly areaId: number,

    ){}
    static create( props: {[key:string]: any} ): [string?, CreateAsistenteIdDto?]  {
  
      const { caracteristicas,descripcion,soporte,areaId} = props;
  
      if ( !caracteristicas) return ['id property is required', undefined];
  
  
      return [undefined, new CreateAsistenteIdDto(caracteristicas,descripcion,soporte,areaId)];
    }
  }