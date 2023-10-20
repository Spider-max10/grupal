// routes.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Ruta para obtener todos los clientes
router.get('/clientes', async (req, res) => {
  const clientes = await prisma.cliente.findMany();
  res.json(clientes);
});

// Ruta para obtener un cliente por su ID
router.get('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  const cliente = await prisma.cliente.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(cliente);
});

// Rutas para las operaciones CRUD de Clientes
// Puedes crear rutas similares para las operaciones CRUD de Asistencia

// Ruta para crear un nuevo cliente
router.post('/clientes', async (req, res) => {
  const { nombre, correo } = req.body;
  const nuevoCliente = await prisma.cliente.create({
    data: { nombre, correo },
  });
  res.json(nuevoCliente);
});

// Ruta para actualizar un cliente por su ID
router.put('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, correo } = req.body;
  const clienteActualizado = await prisma.cliente.update({
    where: { id: parseInt(id) },
    data: { nombre, correo },
  });
  res.json(clienteActualizado);
});

// Ruta para eliminar un cliente por su ID
router.delete('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.cliente.delete({
    where: { id: parseInt(id) },
  });
  res.json({ message: 'Cliente eliminado correctamente' });
});









// Rutas para el modelo Serie
router.get('/series', async (req, res) => {
  const series = await prisma.series.findMany();
  res.json(series);
});

router.get('/series/:id', async (req, res) => {
  const { id } = req.params;
  const serie = await prisma.series.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(serie);
});

// Rutas para el modelo Asistente
router.get('/asistentes', async (req, res) => {
  const asistentes = await prisma.asistente.findMany();
  res.json(asistentes);
});

router.get('/asistentes/:id', async (req, res) => {
  const { id } = req.params;
  const asistente = await prisma.asistente.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(asistente);
});

// Rutas para el modelo Area
router.get('/areas', async (req, res) => {
  const areas = await prisma.area.findMany();
  res.json(areas);
});

router.get('/areas/:id', async (req, res) => {
  const { id } = req.params;
  const area = await prisma.area.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(area);
});

// Rutas para el modelo Modelos
router.get('/modelos', async (req, res) => {
  const modelos = await prisma.modelos.findMany();
  res.json(modelos);
});

router.get('/modelos/:id', async (req, res) => {
  const { id } = req.params;
  const modelo = await prisma.modelos.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(modelo);
});

export default router;

