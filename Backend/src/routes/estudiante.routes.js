import { Router } from "express";
import {
    crearEstudiante,
    listarEstudiantes,
    eliminarEstudiante
} from "../controllers/estudiante.controller.js";

const router = Router();

router.post("/", crearEstudiante);
router.get("/", listarEstudiantes);
router.delete("/:id", eliminarEstudiante);

export default router;
