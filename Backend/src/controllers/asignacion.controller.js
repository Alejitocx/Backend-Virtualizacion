import Asignacion from '../models/asignacion.model.js';


// Crear y guardar una nueva asignación (estudiante o profesor)
export const crear = async (req, res) => {
    // 1. Validar solicitud
    if (!req.body.tipo || !req.body.id_persona || !req.body.id_materia) {
        return res.status(400).send({
            message: "Faltan datos: tipo, id_persona o id_materia."
        });
    }

    const asignacionData = {
        tipo: req.body.tipo,
        id_persona: req.body.id_persona,
        id_materia: req.body.id_materia
    };

    // 2. Crear y guardar la asignación
    try {
        const data = await Asignacion.create(asignacionData);
        res.send(data);
    } catch (err) {
        if (err.kind === "invalid_type") {
            res.status(400).send({ message: err.message });
        } else {
            console.error(err);
            res.status(500).send({ message: "Error al crear la asignación." });
        }
    }
};

// Listar todos los estudiantes asignados
export const listarEstudiantes = async (req, res) => {
    try {
        const data = await Asignacion.getAllEstudiantes();
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Error al listar estudiantes." });
    }
};

// Listar todos los profesores asignados
export const listarProfesores = async (req, res) => {
    try {
        const data = await Asignacion.getAllProfesores();
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Error al listar profesores." });
    }
};

// Eliminar una asignación por ID y tipo (estudiante o profesor)
export const eliminar = async (req, res) => {
    const id = req.params.id; 
    const tipo = req.query.tipo;

    // Validar que el tipo esté presente
    if (!tipo) {
        return res.status(400).send({ message: "Se requiere el parámetro 'tipo' (estudiante o profesor)." });
    }

    // Eliminar la asignación
    try {
        await Asignacion.delete(id, tipo);
        res.send({ message: "Asignación eliminada correctamente." });
    } catch (err) {
        if (err.kind === "not_found") {
            res.status(404).send({ message: "No se encontró la asignación." });
        } else if (err.kind === "invalid_type") {
            res.status(400).send({ message: err.message });
        } else {
            console.error(err);
            res.status(500).send({ message: "Error al eliminar la asignación." });
        }
    }
};