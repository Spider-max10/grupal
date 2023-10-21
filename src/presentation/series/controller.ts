import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import {CreateSeriesIdDto, UpdateSeriesIdDto} from '../../domain/dtos/'


export class seriesIdController {
  //* DI
  constructor() { }
  public getSeriesId = async( req: Request, res: Response ) => {
    const serie = await prisma.seriesId.findMany();
    return res.json( serie );
  };




  public getSeriesIdById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const seriesId = await prisma.seriesId.findFirst({
      where: { id }
    });
    
    ( seriesId )
      ? res.json( seriesId )
      : res.status( 404 ).json( { error: `Serie with id ${ id } not found` } );
  };




  public createSeriesId = async( req: Request, res: Response ) => {
    
    const [error, createSeriesIdDto] = CreateSeriesIdDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const seriesId = await prisma.seriesId.create({
      data: createSeriesIdDto!
    });

    res.json( seriesId );

  };



  public updateSeriesId = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateSeriesIdDto] = UpdateSeriesIdDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const serie = await prisma.seriesId.findFirst({
      where: { id }
    });
    if ( !serie ) return res.status( 404 ).json( { error: `Serie with id ${ id } not found` } );
    const updatedSeriesId = await prisma.seriesId.update({
      where: { id },
      data: updateSeriesIdDto!.values
    });
    res.json( updateSeriesIdDto );
  }


  public deleteSeriesId = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const seriesId = await prisma.seriesId.findFirst({
      where: { id }
    });

    if ( !seriesId ) return res.status(404).json({ error: `Serie with id ${ id } not found` });
    const deleted = await prisma.seriesId.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Serie with id ${ id } not found` });
  }
}