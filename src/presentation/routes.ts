import { Router } from 'express';

import { AsistenciasRoutes  } from './asistencias/routes';
import { ClienteRoutes  } from './clientes/routes';
import { ModeloRoutes } from './modelo/routes';
import { SerieRoutes } from './series/routes';
import { AsistenteIdRoutes } from './asistente/routes';
import { AreaIdRoutes } from './area/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/asistencia', AsistenciasRoutes.routes );
    router.use('/api/cliente', ClienteRoutes.routes );
    router.use('/api/modelo', ModeloRoutes.routes );
    router.use('/api/serie', SerieRoutes.routes );
    router.use('/api/asistencia', AsistenciasRoutes.routes );
    router.use('/api/area', AreaIdRoutes.routes );
    
    return router;
  }


}

