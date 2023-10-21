

export class UpdateSeriesIdDto {

    private constructor(
      
      public readonly id: number,
      public readonly consumible: string,
      public readonly tipo: String,
      public readonly conexion: String,
      public readonly modeloId: number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};

      if ( this.consumible ) returnObj.consumible= this.consumible;
      if ( this.tipo ) returnObj.tipo= this.tipo;
      if ( this.conexion ) returnObj.conexion = this.conexion;
      if ( this.modeloId ) returnObj.modeloId = this.modeloId;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateSeriesIdDto?]  {
  
      const { id,consumible, tipo, conexion,modeloId} = props;
      let newName = consumible;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !consumible && !tipo ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateSeriesIdDto(id, consumible,tipo,conexion,modeloId)];
    }
    
  
  }