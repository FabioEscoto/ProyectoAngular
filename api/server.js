// api/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Para leer JSON en el body de las peticiones

// Datos en memoria
let elementos = ['Angular', 'React', 'Vue'];

// GET: Devolver todos los elementos
app.get('/elementos', (req, res) => {
  res.json(elementos);
});

// POST: Agregar un nuevo elemento
app.post('/elementos', (req, res) => {
  const { nombre } = req.body;

  if (!nombre || typeof nombre !== 'string') {
    return res.status(400).json({ error: 'Nombre es requerido y debe ser una cadena.' });
  }

  elementos.push(nombre);
  res.status(201).json({ mensaje: 'Elemento agregado con éxito.' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
