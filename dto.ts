// dominio
export class ClienteDTO {
    nombre: string;
    correo: string;
  
    constructor(nombre: string, correo: string) {
      this.nombre = nombre;
      this.correo = correo;
    }
  }
  
  export class SerieDTO {
    name: string;
    description: string;
    modeloId: number;
  
    constructor(name: string, description: string, modeloId: number) {
      this.name = name;
      this.description = description;
      this.modeloId = modeloId;
    }
  }
  
  export class AsistenteDTO {
    name: string;
    areaId: number;
  
    constructor(name: string, areaId: number) {
      this.name = name;
      this.areaId = areaId;
    }
  }
  
  export class AreaDTO {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  export class ModelosDTO {
    name: string;
    description: string;
  
    constructor(name: string, description: string) {
      this.name = name;
      this.description = description;
    }
  }
  
