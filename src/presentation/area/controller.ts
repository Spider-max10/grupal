import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateAreaIdDto, UpdateAreaIdDto } from '../../domain/dtos';


export class AreaIdController {
  //* DI
  constructor() { }
  public getAreaId = async( req: Request, res: Response ) => {
    const areaIds = await prisma.areaId.findMany();
    return res.json( areaIds);
  };




  public getAreaIdById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const areaIds = await prisma.areaId.findFirst({
      where: { id }
    });
    
    ( areaIds )
      ? res.json( areaIds )
      : res.status( 404 ).json( { error: `Area with id ${ id } not found` } );
  };




  public createAreaId = async( req: Request, res: Response ) => {
    
    const [error, createAreaIdDto] = CreateAreaIdDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const areaIds = await prisma.areaId.create({
    data : createAreaIdDto!
    });

    res.json( areaIds );

  };



  public updateAreaId = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateAreaIdDto] = UpdateAreaIdDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const areaIds = await prisma.areaId.findFirst({
      where: { id }
    });
    if ( !areaIds ) return res.status( 404 ).json( { error: `Area with id ${ id } not found` } );
    const updatedAreaId = await prisma.areaId.update({
      where: { id },
      data: updateAreaIdDto!.values
    });
    res.json( updatedAreaId );
  }


  public deleteAreaId = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const areaIds = await prisma.areaId.findFirst({
      where: { id }
    });

    if ( !areaIds ) return res.status(404).json({ error: `Area with id ${ id } not found` });
    const deleted = await prisma.areaId.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Area with id ${ id } not found` });
  }
}