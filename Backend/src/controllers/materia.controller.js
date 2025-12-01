import { Materia } from "../models/materia.model.js";

// Crear una nueva materia
export const crearMateria = async (req, res) => {
    const id = await Materia.crear(req.body.nombre);
    res.json({ msg: "Materia creada", id });
};

// Listar todas las materias
export const listarMaterias = async (req, res) => {
    res.json(await Materia.listar());
};

// Eliminar una materia por ID
export const eliminarMateria = async (req, res) => {
    await Materia.eliminar(req.params.id);
    res.json({ msg: "Materia eliminada" });
};
