const alumnoValidator = (req, res, next) => {
  const { nombre, apellido, email, isActive } = req.body
  const errors = []

  if (nombre !== undefined && typeof nombre !== 'string') {
    errors.push("No se ingresó un valor válido para 'nombre'")
  }
  if (apellido !== undefined && typeof apellido !== 'string') {
    errors.push("No se ingresó un valor válido para 'apellido'")
  }
  if (email !== undefined && typeof email !== 'string') {
    errors.push("No se ingresó un valor válido para 'email'")
  }
  if (isActive !== undefined && typeof isActive !== 'boolean') {
    errors.push("No se ingresó un valor válido para 'isActive'")
  }

  if (errors.length > 0) {
    return res.status(400).json({
      msg: 'Datos de petición inválidos',
      errors
    })
  }

  next()
}

module.exports = { alumnoValidator }
