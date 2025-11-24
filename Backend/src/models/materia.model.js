import { db } from "../config/db.js";

export class Materia {
    static async crear(nombre) {
        const [res] = await db.query(
            "INSERT INTO materias (nombre) VALUES (?)",
            [nombre]
        );
        return res.insertId;
    }

    static async listar() {
        const [rows] = await db.query("SELECT * FROM materias");
        return rows;
    }

    static async eliminar(id) {
        await db.query("DELETE FROM materias WHERE id = ?", [id]);
    }
}
