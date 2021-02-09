import * as clientesCtrl from "../controllers/clientes.controller";
import { Router } from "express";

const router = Router();

// router.post("/", productosCtrl.crearProducto);
router.get("/", clientesCtrl.consultarCliente);
// router.get("/listaProductosPorDescripcion", productosCtrl.listaProductosPorDescripcion);
// router.delete("/", productosCtrl.borrarTodosProductos);

export default router;