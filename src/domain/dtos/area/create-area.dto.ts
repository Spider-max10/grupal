export class CreateAreaIdDto {
    private constructor(
      public readonly id : number,
      public readonly narea: number,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateAreaIdDto?]  {
  
      const { id, narea} = props;
  
      if ( !narea) return ['id property is required', undefined];
  
  
      return [undefined, new CreateAreaIdDto(id,narea)];
    }
  }