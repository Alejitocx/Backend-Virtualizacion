import { Asignacion } from "../models/asignacion.model.js";

export const asignarEstudiante = async (req, res) => {
    await Asignacion.asignarMateriaEstudiante(
        req.body.estudiante_id,
        req.body.materia_id
    );
    res.json({ msg: "Materia asignada al estudiante" });
};

export const asignarProfesor = async (req, res) => {
    await Asignacion.asignarMateriaProfesor(
        req.body.profesor_id,
        req.body.materia_id
    );
    res.json({ msg: "Materia asignada al profesor" });
};

export const listarMateriasEstudiante = async (req, res) => {
    res.json(await Asignacion.materiasPorEstudiante(req.params.id));
};

export const listarMateriasProfesor = async (req, res) => {
    res.json(await Asignacion.materiasPorProfesor(req.params.id));
};
