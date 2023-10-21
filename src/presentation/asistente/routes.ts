import { Router } from 'express';
import { AsistenteIdController } from './controller';

export class AsistenteIdRoutes {
  static get routes(): Router {
    const router = Router();
    const asistenteController = new AsistenteIdController();
    router.get('/', asistenteController.getAsistente);
    router.get('/:id', asistenteController.getAsistente );
    router.post('/', asistenteController.createAsistenteId );
    router.put('/:id', asistenteController.updateAsistenteId );
    router.delete('/:id', asistenteController.deleteAsistenteId );
    return router;
  }
}
