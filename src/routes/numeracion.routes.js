import * as numeracionCtrl from "../controllers/numeracion.controller";
import { Router } from "express";

const router = Router();

router.post("/", numeracionCtrl.crearNumeracion);
router.get("/", numeracionCtrl.leerNumeracion);
router.delete("/", numeracionCtrl.borrarNumeraciones);
router.put("/", numeracionCtrl.actualizarNumeracion);

export default router;