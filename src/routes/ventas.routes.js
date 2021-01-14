import * as ventasCtrl from "../controllers/ventas.controller";
import { Router } from "express";

const router = Router();

router.post("/", ventasCtrl.crearVenta);
router.get("/", ventasCtrl.consultarVentas);
router.get("/ultimo", ventasCtrl.numeroUltimaVenta);


export default router;