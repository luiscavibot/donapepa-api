import * as borradorCtrl from "../controllers/borrador.controller";
import { Router } from "express";

const router = Router();

router.post("/", borradorCtrl.crearBorrador);
router.get("/", borradorCtrl.obtenerBorradores);
router.delete("/:id", borradorCtrl.borrarBorrador);

export default router;