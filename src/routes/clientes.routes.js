import * as clientesCtrl from "../controllers/clientes.controller";
import { Router } from "express";

const router = Router();

router.post("/", clientesCtrl.crearCliente);
router.get("/", clientesCtrl.consultarCliente);
router.get("/:id", clientesCtrl.consultarClienteId);
// router.get("/listaProductosPorDescripcion", productosCtrl.listaProductosPorDescripcion);
// router.delete("/", productosCtrl.borrarTodosProductos);

export default router;