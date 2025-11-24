📘 Backend – Sistema Escolar (Node.js + Express + MySQL)

Este backend implementa un sistema escolar modular como parte del Proyecto Final de Virtualización.
Gestiona estudiantes, profesores, materias y asignaciones, utilizando Node.js, Express y MySQL, con una arquitectura limpia y totalmente modular.

🚀 Tecnologías utilizadas

Node.js

Express.js

MySQL / MariaDB

MySQL2 (driver)

Dotenv

CORS

📂 Estructura del proyecto
Backend/
│── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
│── .env
│── .gitignore
│── package.json

✔ config/db.js

Contiene la conexión a la base de datos MySQL.

✔ models/

Capas de acceso a datos (consultas SQL).

✔ controllers/

Lógica que recibe la solicitud y llama a los modelos.

✔ routes/

Rutas REST que exponen la API.

✔ app.js

Configura Express, middlewares y rutas.

✔ server.js

Inicia el servidor en el puerto indicado.

🛢️ Base de datos

El sistema incluye las siguientes tablas:

estudiantes

profesores

materias

estudiante_materia (relación muchos-a-muchos)

profesor_materia (relación muchos-a-muchos)

Claves foráneas con:

ON DELETE CASCADE

ON UPDATE CASCADE

🔐 Variables de entorno (.env)
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=escuela_db
PORT=3000


El archivo .env está protegido con .gitignore.

📡 Endpoints disponibles
🎓 Estudiantes
Método	Endpoint	Descripción
GET	/estudiantes	Listar estudiantes
POST	/estudiantes	Crear estudiante
DELETE	/estudiantes/:id	Eliminar estudiante

Ejemplo POST:

{
  "nombre": "Juan",
  "apellido": "Pérez"
}

👨‍🏫 Profesores
Método	Endpoint	Descripción
GET	/profesores	Listar profesores
POST	/profesores	Crear profesor
DELETE	/profesores/:id	Eliminar profesor
📚 Materias
Método	Endpoint	Descripción
GET	/materias	Listar materias
POST	/materias	Crear materia
DELETE	/materias/:id	Eliminar materia
🔗 Asignaciones

Permite asignar materias a estudiantes y profesores.

Asignar materia a estudiante
POST /asignaciones/estudiante


Body:

{
  "estudiante_id": 1,
  "materia_id": 2
}

Asignar materia a profesor
POST /asignaciones/profesor


Body:

{
  "profesor_id": 1,
  "materia_id": 3
}

Ver materias asignadas

Estudiante:
GET /asignaciones/estudiante/:id

Profesor:
GET /asignaciones/profesor/:id

▶️ Cómo ejecutar el backend

Instalar dependencias:

npm install


Configurar .env

Iniciar servidor:

npm start


El backend correrá en:

http://localhost:3000

🧱 Estado del proyecto

✔ Backend completo
✔ Base de datos funcional
✔ Relaciones creadas
✔ API REST modular
✔ .env protegido
✔ Listo para despliegue y para conectarse al frontend
