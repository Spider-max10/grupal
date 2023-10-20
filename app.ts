// app.ts
import express from 'express';
import routes from './rutas';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas definidas en el archivo routes.ts
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});