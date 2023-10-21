import { Router } from 'express';
import { seriesIdController } from './controller';

export class SerieRoutes {
  static get routes(): Router {
    const router = Router();
    const SeriesController = new seriesIdController();
    router.get('/', SeriesController.getSeriesId);
    router.get('/:id', SeriesController.getSeriesId);
    router.post('/', SeriesController.createSeriesId );
    router.put('/:id', SeriesController.updateSeriesId );
    router.delete('/:id', SeriesController.deleteSeriesId );
    return router;
  }
}