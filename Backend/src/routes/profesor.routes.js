import { Router } from "express";
import {
    crearProfesor,
    listarProfesores,
    eliminarProfesor
} from "../controllers/profesor.controller.js";

const router = Router();

router.post("/", crearProfesor);
router.get("/", listarProfesores);
router.delete("/:id", eliminarProfesor);

export default router;
