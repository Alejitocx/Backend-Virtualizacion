import { db } from "../config/db.js";

export class Asignacion {
    static async asignarMateriaEstudiante(idEst, idMat) {
        await db.query(
            "INSERT INTO estudiante_materia (estudiante_id, materia_id) VALUES (?, ?)",
            [idEst, idMat]
        );
    }

    static async asignarMateriaProfesor(idProf, idMat) {
        await db.query(
            "INSERT INTO profesor_materia (profesor_id, materia_id) VALUES (?, ?)",
            [idProf, idMat]
        );
    }

    static async materiasPorEstudiante(id) {
        const [rows] = await db.query(
            `SELECT m.nombre FROM materias m
             JOIN estudiante_materia em ON m.id = em.materia_id
             WHERE em.estudiante_id = ?`,
            [id]
        );
        return rows;
    }

    static async materiasPorProfesor(id) {
        const [rows] = await db.query(
            `SELECT m.nombre FROM materias m
             JOIN profesor_materia pm ON m.id = pm.materia_id
             WHERE pm.profesor_id = ?`,
            [id]
        );
        return rows;
    }
}
