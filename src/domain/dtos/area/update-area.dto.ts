

export class UpdateAreaIdDto {

    private constructor(
      
      public readonly id: number,
      public readonly narea?: String,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id ) returnObj.id= this.id;
      if ( this.narea ) returnObj.narea = this.narea;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateAreaIdDto?]  {
  
      const { id, narea } = props;
      let newName = narea;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !narea ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateAreaIdDto(id, narea)];
    }
    
  
  }