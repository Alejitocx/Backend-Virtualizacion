import { Router } from "express";
import {
    asignarEstudiante,
    asignarProfesor,
    listarMateriasEstudiante,
    listarMateriasProfesor
} from "../controllers/asignacion.controller.js";

const router = Router();

router.post("/estudiante", asignarEstudiante);
router.post("/profesor", asignarProfesor);
router.get("/estudiante/:id", listarMateriasEstudiante);
router.get("/profesor/:id", listarMateriasProfesor);

export default router;
