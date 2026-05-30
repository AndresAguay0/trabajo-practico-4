const { Router } = require('express')
const { alumnoValidator } = require('../middleware/alumno-validator.middleware')
const {
  getAlumnoAll,
  getAlumnoById,
  putAlumnoById
} = require('../controllers/alumno.controller')

const rutas = Router()

rutas.get('/', getAlumnoAll)
rutas.get('/:legajo', getAlumnoById)
rutas.put('/:legajo', alumnoValidator, putAlumnoById)

module.exports = rutas
