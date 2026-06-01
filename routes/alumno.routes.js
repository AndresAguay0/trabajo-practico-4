const { Router } = require('express')
const { alumnoValidator } = require('../middleware/alumno-validator.middleware')
const {
  getAlumnoAll,
  getAlumnoById,
  postNewAlumno,
  putAlumnoById,
  deleteAlumnoById
} = require('../controllers/alumno.controller')

const rutas = Router()

rutas.get('/', getAlumnoAll)
rutas.get('/:legajo', getAlumnoById)
rutas.post('/', alumnoValidator, postNewAlumno)
rutas.put('/:legajo', alumnoValidator, putAlumnoById)
rutas.delete('/:legajo', deleteAlumnoById)

module.exports = rutas
