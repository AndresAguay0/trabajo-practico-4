# TRABAJO PRÁCTICO 4 - GRUPO 18

#### Integrantes:

> - Fabricio Maida
> - Andrés Aguayo
> - Ailén Villalba
> - Valentina Vitale
> - Alesio Cragno

## Alumnos API REST.

> Sistema de Gestion de alumnos con sus respectivos datos (legajo, nombre, apellido, email, fechaAlta, modificacion y si esta activo).  

---

### Metodología de trabajo con Git y GitHub.

Se utilizó Git para el control de versiones y GitHub para el trabajo colaborativo.

Flujo de trabajo:

1. Creación de ramas individuales para cada integrante.
2. Desarrollo de funcionalidades en ramas de integrantes.
3. Creación de Pull Requests.
4. Revisión de código.
5. Integración a la rama principal (main).


## División de los archivos entre los integrantes.

> **Valentina Vitale y Alesio Cragno**:  
> - Implementacion de clase alumno en alumno.model.ts
> - PUT en alumno.controller.js
> - Rutas de PUT en alumno.routes.js
> - Implementacion de middleware en alumno-validator.middleware.js.

> **Andres Aguayo**:  
> - POST en alumno.controller.js
> - Rutas de POST en alumno.routes.js
> - Renderización y Dockerización

## Distribución de los archivos y carpetas.

### controllers

- alumno.controller.js: gestiona las funciones de alumnos.

---

### core

Contiene la configuración principal del servidor.

- server.js: inicializa y configura el servidor.

---

### data

Contiene archivos de datos utilizados por la aplicación (JSON).

---

### middleware

Contiene funciones intermedias que se ejecutan antes de llegar a los controladores.

- alumno-validator.middleware.js: valida los datos recibidos para alumnos.

---

### models

Define las estructuras de datos de la aplicación.

- alumno.model.ts: modelo de Alumno.
- persona.model.ts: modelo base Persona.

---

### routes

Define las rutas de la API.

- alumno.routes.js: endpoints relacionados con alumnos.

---

### package.json

Dependencias y scripts del proyecto.

---

### tsconfig.json

Configuración de TypeScript.

## FUNCIONES

### Constructor AlumnoModel()

Crea una nueva instancia de un alumno heredando los atributos de PersonaModel.
Parámetros:

- legajo (number): número identificador del alumno.
- nombre (string): nombre del alumno.
- apellido (string): apellido del alumno.
- email (string): correo electrónico.
- fechaAlta (string): fecha de creación del registro.
- modificacion (string): fecha de última modificación.
- isActive (boolean): indica si el alumno está activo.

### getAllAttributes()

Sobrescribe (override) el método heredado de PersonaModel mediante polimorfismo.
Retorna un objeto con todos los atributos del alumno.

### getLegajo()

Obtiene el número de legajo del alumno.
Retorna un number.

### getFechaAlta()

Obtiene la fecha de alta del alumno.
Retorna un string.

### getModificacion()

Obtiene la fecha de la última modificación realizada sobre el alumno.
Retorna un string.

### setModificacion(modificacion)

Actualiza la fecha de modificación del alumno.
Parámetros:

- modificacion (string): nueva fecha de modificación.
  Retorna void.

### getIsActive()

Indica si el alumno se encuentra activo.
Retorna un booleano.

### setIsActive(isActive)

Permite activar o desactivar lógicamente un alumno.

Parámetros:

- isActive (boolean): nuevo estado del alumno.

Retorna un void.

## Documentación con ‘Postman’ de todos los métodos (GET, PUT, DELETE, POST).

> -

## Ejemplo de estructura JSON

### alumnos.json:

>{  
"legajo": 10001,  
"nombre": "Mora",  
"apellido": "García",  
"email": "m.garcia@facultad.edu.ar",  
"fechaAlta": "2026-03-02",  
"modificacion": "2026-03-02",  
"isActive": true  
}

## Link del deploy en Render.

> https://trabajo-practico-4.onrender.com
