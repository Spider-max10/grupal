import { Router } from 'express';
import { AreaIdController } from './controller';

export class AreaIdRoutes {
  static get routes(): Router {
    const router = Router();
    const areasController = new AreaIdController();
    router.get('/', areasController.getAreaId);
    router.get('/:id', areasController.getAreaIdById );
    router.post('/', areasController.createAreaId );
    router.put('/:id', areasController.updateAreaId );
    router.delete('/:id', areasController.deleteAreaId );
    return router;
  }
}
