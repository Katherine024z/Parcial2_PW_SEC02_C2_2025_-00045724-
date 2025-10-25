import express from "express";
import { getAllCuentas, getCuentaById, searchCuentas, getCuentasBalance } from "../controllers/cuentasController.js";

const router = express.Router(); //Crea un router de Express para agrupar rutas relacionadas con /cuentas.

// GET/cuentas > lista todas las cuentas
router.get("/", getAllCuentas);

// GET/cuentas/buscar?queryParam=valor > obtiene segun el parametro de consulta
router.get("/buscar", searchCuentas);

// GET/cuentas/:id > obtiene una cuenta por ID
router.get("/:id", getCuentaById);

// GET/cuentasBalance > suma balances activos
router.get("/balance/total", getCuentasBalance);

export default router; //exporta router para usar en el servidor (script.js)
