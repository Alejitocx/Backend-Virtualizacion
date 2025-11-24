import { Router } from "express";
import {
    crearMateria,
    listarMaterias,
    eliminarMateria
} from "../controllers/materia.controller.js";

const router = Router();

router.post("/", crearMateria);
router.get("/", listarMaterias);
router.delete("/:id", eliminarMateria);

export default router;
