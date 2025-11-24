import { Estudiante } from "../models/estudiante.model.js";

export const crearEstudiante = async (req, res) => {
    const id = await Estudiante.crear(req.body);
    res.json({ msg: "Estudiante creado", id });
};

export const listarEstudiantes = async (req, res) => {
    res.json(await Estudiante.listar());
};

export const eliminarEstudiante = async (req, res) => {
    await Estudiante.eliminar(req.params.id);
    res.json({ msg: "Estudiante eliminado" });
};
