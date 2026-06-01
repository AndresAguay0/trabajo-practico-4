const { Router } = require('express')
const { alumnoValidator } = require('../middleware/alumno-validator.middleware')
const {
  getAlumnoAll,
  getAlumnoById,
  postNewAlumno,
  putAlumnoById
} = require('../controllers/alumno.controller')

const rutas = Router()

rutas.get('/', getAlumnoAll)
rutas.get('/:legajo', getAlumnoById)
rutas.post('/', postNewAlumno)
rutas.put('/:legajo', alumnoValidator, putAlumnoById)

module.exports = rutas
