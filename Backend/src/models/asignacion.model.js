import { db } from '../config/db.js';

const Asignacion = {};

// Crear Asignación (Usando Async/Await)
Asignacion.create = async (data) => {
    let sql = '';
    let params = [];

    if (data.tipo === 'estudiante') {
        sql = 'INSERT INTO estudiante_materia (estudiante_id, materia_id) VALUES (?, ?)';
        params = [data.id_persona, data.id_materia];
    } else if (data.tipo === 'profesor') {
        sql = 'INSERT INTO profesor_materia (profesor_id, materia_id) VALUES (?, ?)';
        params = [data.id_persona, data.id_materia];
    } else {
        throw { kind: "invalid_type", message: "El tipo debe ser 'estudiante' o 'profesor'" };
    }

    // Ejecutamos la consulta esperando la promesa
    const [result] = await db.query(sql, params);
    return { id: result.insertId, ...data };
};

// Listar Estudiantes (Usando Async/Await)
Asignacion.getAllEstudiantes = async () => {
    const sql = `
        SELECT em.id, e.nombre, e.apellido, m.nombre as materia, em.materia_id, em.estudiante_id
        FROM estudiante_materia em
        JOIN estudiantes e ON em.estudiante_id = e.id
        JOIN materias m ON em.materia_id = m.id
        ORDER BY em.id DESC
    `;
    const [rows] = await db.query(sql);
    return rows;
};

// Listar Profesores (Usando Async/Await)
Asignacion.getAllProfesores = async () => {
    const sql = `
        SELECT pm.id, p.nombre, p.apellido, m.nombre as materia, pm.materia_id, pm.profesor_id
        FROM profesor_materia pm
        JOIN profesores p ON pm.profesor_id = p.id
        JOIN materias m ON pm.materia_id = m.id
        ORDER BY pm.id DESC
    `;
    const [rows] = await db.query(sql);
    return rows;
};

// Función para ELIMINAR una asignación
Asignacion.delete = async (id, tipo) => {
    let sql = '';
    
    if (tipo === 'estudiante') {
        sql = 'DELETE FROM estudiante_materia WHERE id = ?';
    } else if (tipo === 'profesor') {
        sql = 'DELETE FROM profesor_materia WHERE id = ?';
    } else {
        throw { kind: "invalid_type", message: "Tipo no válido para eliminación" };
    }

    const [result] = await db.query(sql, [id]);
    
    if (result.affectedRows === 0) {
        throw { kind: "not_found", message: "No se encontró la asignación con ese ID" };
    }

    return result;
};

export default Asignacion;