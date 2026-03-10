const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;
const NICKNAME = 'EO-ENCENDIDO-OESTE';

app.use(cors()); // permite que tu página web llame a este servidor
app.use(express.static('public')); // sirve la página HTML

// Endpoint que obtiene los productos de MercadoLibre
app.get('/api/productos', async (req, res) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLA/search?nickname=${NICKNAME}&limit=50`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data.results || []);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'No se pudieron obtener los productos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
