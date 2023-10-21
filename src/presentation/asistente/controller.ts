import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateAsistenteIdDto, UpdateAsistenteIdDto } from '../../domain/dtos';


export class AsistenteIdController {
  //* DI
  constructor() { }
  public getAsistente = async( req: Request, res: Response ) => {
    const asistente = await prisma.asistenteId.findMany();
    return res.json( asistente );
  };




  public getAsistenciaIdById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const asistente = await prisma.asistenteId.findFirst({
      where: { id }
    });
    
    ( asistente )
      ? res.json( asistente )
      : res.status( 404 ).json( { error: `Asistente with id ${ id } not found` } );
  };




  public createAsistenteId = async( req: Request, res: Response ) => {
    
    const [error, createAsistenteIdDto] = CreateAsistenteIdDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const asistente = await prisma.asistenteId.create({
      data: createAsistenteIdDto!
    });

    res.json( asistente );

  };



  public updateAsistenteId = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateAsistenteIdDto] = UpdateAsistenteIdDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const asistente = await prisma.asistenteId.findFirst({
      where: { id }
    });
    if ( !asistente ) return res.status( 404 ).json( { error: `Asistente with id ${ id } not found` } );
    const updatedAsistenteId = await prisma.asistenteId.update({
      where: { id },
      data: updateAsistenteIdDto!.values
    });
    res.json( updatedAsistenteId );
  }


  public deleteAsistenteId = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const asistente = await prisma.asistenteId.findFirst({
      where: { id }
    });

    if ( !asistente ) return res.status(404).json({ error: `Asistente with id ${ id } not found` });
    const deleted = await prisma.asistenteId.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Asistente with id ${ id } not found` });
  }
}