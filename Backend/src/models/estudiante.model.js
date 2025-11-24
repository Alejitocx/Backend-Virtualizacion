import { db } from "../config/db.js";

export class Estudiante {
    static async crear(data) {
        const [res] = await db.query(
            "INSERT INTO estudiantes (nombre, apellido) VALUES (?, ?)",
            [data.nombre, data.apellido]
        );
        return res.insertId;
    }

    static async listar() {
        const [rows] = await db.query("SELECT * FROM estudiantes");
        return rows;
    }

    static async eliminar(id) {
        await db.query("DELETE FROM estudiantes WHERE id = ?", [id]);
    }
}
