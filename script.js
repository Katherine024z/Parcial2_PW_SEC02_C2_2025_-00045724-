//archivo que contiene el servidor
import express from "express";
import cuentasRoutes from "./routes/cuentasRoutes.js";

const app = express(); // Crear la aplicación de Express
const PORT = 3130;

//Agrega middleware para que Express pueda leer JSON en el cuerpo de las peticiones
app.use(express.json());

// Ruta base
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente!");
});

// Montar rutas de /cuentas
app.use("/cuentas", cuentasRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
