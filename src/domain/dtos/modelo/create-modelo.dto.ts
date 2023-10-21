export class CreateModeloDto {
    private constructor(
      public readonly tipo : string,
      public readonly modelo: string,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateModeloDto?]  {
  
      const { tipo, modelo} = props;
  
      if ( !tipo) return ['id property is required', undefined];
  
  
      return [undefined, new CreateModeloDto(tipo, modelo)];
    }
  }