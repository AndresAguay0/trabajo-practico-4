const fs = require('fs').promises
const { AlumnoModel } = require('../models/alumno.model')

const getAlumnoAll = async (req, res) => {
  try {
    const data = await fs.readFile('./data/alumnos.json', 'utf8')
    const alumnos = JSON.parse(data)

    return res.status(200).json(alumnos)
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ error: 'No se puedieron obtener los datos de los alumnos' })
  }
}

const getAlumnoById = async (req, res) => {
  try {
    const data = await fs.readFile('./data/alumnos.json', 'utf8')
    const alumnos = JSON.parse(data)

    const { legajo } = req.params

    const legajoId = alumnos.find(
      (a) => a.legajo /* .toString() */ === Number(legajo)
    )

    if (!legajoId) {
      return res
        .status(404)
        .json({ msg: `No existe el alumno con el legajo ${legajo}` })
    }

    return res.status(200).json(legajoId)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: 'No se pudo obtener el detalle del alumno con legajo n° {legajo}'
    })
  }
}

const putAlumnoById = async (req, res) => {
  console.log('PARAMS:', req.params)
  console.log('BODY:', req.body)
  const { legajo } = req.params
  const { nombre, apellido, email, isActive } = req.body

  try {
    const data = await fs.readFile('./data/alumnos.json', 'utf8')
    const alumnos = JSON.parse(data)

    const index = alumnos.findIndex(
      (alumno) => alumno.legajo === Number(legajo)
    )

    if (index === -1) {
      return res.status(404).json({
        msg: `No se encontró el alumno con el legajo n° ${legajo}`
      })
    }

    const alumno = alumnos[index]

    if (nombre) alumno.nombre = nombre
    if (apellido) alumno.apellido = apellido
    if (email) alumno.email = email
    if (typeof isActive !== 'undefined') alumno.isActive = isActive

    await fs.writeFile(
      './data/alumnos.json',
      JSON.stringify(alumnos, null, 2),
      'utf8'
    )

    return res.status(200).json({
      msg: `Se modificó correctamente el alumno con legajo n° ${legajo}`,
      alumno
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: `No se pudieron modificar los datos del alumno con legajo n° ${legajo}`
    })
  }
}

const postNewAlumno = async (req, res) => {
  try {
    const { nombre, apellido, email } = req.body

    const data = await fs.readFile('./data/alumnos.json', 'utf8')
    const alumnos = JSON.parse(data)

    console.log("Se parseo la informacion a 'alumnos'")

    const legajos = alumnos.map((alumno) => alumno.legajo)
    const nuevoLegajo = Math.max(...legajos) + 1

    console.log(`Nuevo legajo generado: ${nuevoLegajo}`)

    const nuevoAlumno = new AlumnoModel(nuevoLegajo, nombre, apellido, email)

    console.log(nuevoAlumno.getAllAttributes())

    const alumnoNuevo = nuevoAlumno.getAllAttributes()
    alumnos.push(alumnoNuevo)

    fs.writeFile('./data/alumnos.json', JSON.stringify(alumnos, null, 2), 'utf8')

    return res.status(200).json({
      msg: `Se agrego el alumno nuevo con el legajo n° ${nuevoLegajo}`,
      alumnoNuevo
    })
  } catch (error) {
    return res.status(500).json({
      error: 'No se pudo dar de alta el alumno'
    })
  }
}

const deleteAlumnoById = async (req, res) => {
  try {
    const { legajo } = req.params

    const data = await fs.readFile('./data/alumnos.json', 'utf8')
    const alumnos = JSON.parse(data)

    console.log("Se parseo la informacion a 'alumnos'")

    const index= alumnos.findIndex(
      (alumno) => alumno.legajo === Number(legajo)
    )

    if (index === -1) {
      return res.status(404).json({
        msg: `No se encontró el alumno con legajo n° ${legajo}`
      })
    }
    const AlEncontrado = alumnos[index]
    alumnos.splice(index, 1)

    await fs.writeFile(
      './data/alumnos.json',
      JSON.stringify(alumnos, null, 2),
      'utf8'
    )

    return res.status(200).json({
      msg: `Se eliminó correctamente el alumno con el legajo n° ${AlEncontrado.legajo}`,
      alumno: AlEncontrado
    })

  } catch (error) {
    return res.status(500).json({
      error: 'No se pudo eliminar el alumno.'
    })
  }
}

module.exports = { getAlumnoAll, getAlumnoById, putAlumnoById, postNewAlumno, deleteAlumnoById }
