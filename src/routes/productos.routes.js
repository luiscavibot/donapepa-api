import * as productosCtrl from "../controllers/productos.controller";
import { Router } from "express";

const router = Router();

router.post("/", productosCtrl.crearProducto);
router.get("/", productosCtrl.consultarProducto);
router.delete("/", productosCtrl.borrarTodosProductos);



export default router;