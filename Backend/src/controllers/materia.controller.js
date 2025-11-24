import { Materia } from "../models/materia.model.js";

export const crearMateria = async (req, res) => {
    const id = await Materia.crear(req.body.nombre);
    res.json({ msg: "Materia creada", id });
};

export const listarMaterias = async (req, res) => {
    res.json(await Materia.listar());
};

export const eliminarMateria = async (req, res) => {
    await Materia.eliminar(req.params.id);
    res.json({ msg: "Materia eliminada" });
};
