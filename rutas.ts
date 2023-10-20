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

export default router;
