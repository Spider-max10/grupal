
import express from 'express';
import routes from './rutas'; // Importa las rutas desde tu archivo routes.ts

const app = express();


app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
