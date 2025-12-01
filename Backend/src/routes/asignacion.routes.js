import { Router } from 'express';
import { crear, listarEstudiantes, listarProfesores, eliminar } from '../controllers/asignacion.controller.js';

const router = Router();

router.post('/', crear);
router.get('/estudiantes', listarEstudiantes);
router.get('/profesores', listarProfesores);
router.delete('/:id', eliminar);

export default router;