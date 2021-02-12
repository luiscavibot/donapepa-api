import * as ventasCtrl from "../controllers/ventas.controller";
import { Router } from "express";

const router = Router();

router.get("/", ventasCtrl.filtroVentas);
router.post("/", ventasCtrl.crearVenta);
router.post("/registrarVenta", ventasCtrl.registrarVenta);
router.get("/", ventasCtrl.consultarVentas);
router.get("/ultimo", ventasCtrl.numeroUltimaVenta);
router.delete("/", ventasCtrl.borrarTodasVentas);

export default router;