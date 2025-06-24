const express = require('express');
const cors = require('cors');
const cursoRoutes = require('./routes/cursoRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Prefixo /api
app.use('/api/cursos', cursoRoutes);

app.get('/', (req, res) => {
  res.send('API EduRecomenda está rodando 🎓');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
