import { Estudiante } from "../models/estudiante.model.js";

// Crear un nuevo estudiante
export const crearEstudiante = async (req, res) => {
    const id = await Estudiante.crear(req.body);
    res.json({ msg: "Estudiante creado", id });
};

// Listar todos los estudiantes
export const listarEstudiantes = async (req, res) => {
    res.json(await Estudiante.listar());
};

// Eliminar un estudiante por ID
export const eliminarEstudiante = async (req, res) => {
    await Estudiante.eliminar(req.params.id);
    res.json({ msg: "Estudiante eliminado" });
};
