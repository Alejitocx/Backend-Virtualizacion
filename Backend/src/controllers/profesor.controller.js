import { Profesor } from "../models/profesor.model.js";

export const crearProfesor = async (req, res) => {
    const id = await Profesor.crear(req.body);
    res.json({ msg: "Profesor creado", id });
};

export const listarProfesores = async (req, res) => {
    res.json(await Profesor.listar());
};

export const eliminarProfesor = async (req, res) => {
    await Profesor.eliminar(req.params.id);
    res.json({ msg: "Profesor eliminado" });
};
