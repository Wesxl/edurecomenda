const express = require("express");
const cors = require("cors");
const app = express();
const cursoRoutes = require("./routes/cursoRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/cursos", cursoRoutes);

app.listen(5000, () => {
  console.log("Servidor Node rodando na porta 5000");
});