// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/hola_mundo', (req, res) => {
  res.send('¡Hola Mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor backend iniciado en http://localhost:${PORT}`);
});
