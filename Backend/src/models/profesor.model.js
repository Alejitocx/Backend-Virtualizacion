import { db } from "../config/db.js";

export class Profesor {
    static async crear(data) {
        const [res] = await db.query(
            "INSERT INTO profesores (nombre, apellido) VALUES (?, ?)",
            [data.nombre, data.apellido]
        );
        return res.insertId;
    }

    static async listar() {
        const [rows] = await db.query("SELECT * FROM profesores");
        return rows;
    }

    static async eliminar(id) {
        await db.query("DELETE FROM profesores WHERE id = ?", [id]);
    }
}
