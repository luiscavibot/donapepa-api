import * as liquidacionesCtrl from "../controllers/liquidaciones.controller";
import { Router } from "express";

const router = Router();

router.post("/", liquidacionesCtrl.crearLiquidacion);
router.get("/", liquidacionesCtrl.obtenerLiquidaciones);

export default router;