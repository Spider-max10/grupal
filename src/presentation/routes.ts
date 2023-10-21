import { Router } from 'express';

import { AsistenciasRoutes  } from './asistencias/routes';
import { ClienteRoutes  } from './clientes/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/asistencia', AsistenciasRoutes.routes );
    router.use('/api/cliente', ClienteRoutes.routes );
    
    return router;
  }


}

