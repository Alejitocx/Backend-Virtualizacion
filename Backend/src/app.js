import express from "express";
import cors from "cors";

import estudianteRoutes from "./routes/estudiante.routes.js";
import profesorRoutes from "./routes/profesor.routes.js";
import materiaRoutes from "./routes/materia.routes.js";
import asignacionRoutes from "./routes/asignacion.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/estudiantes", estudianteRoutes);
app.use("/profesores", profesorRoutes);
app.use("/materias", materiaRoutes);
app.use("/asignaciones", asignacionRoutes);

export default app;
