const routes = require('express').Router()
const requireDir = require('require-dir')

const {
  PacienteController,
} = requireDir('./app/controllers')

const {
  Error: ErrorMiddleware,
} = requireDir('./app/middlewares')

/**
 * Paciente
 */

routes.post('/pacientes', PacienteController.criar)
routes.put('/pacientes', PacienteController.atualizar)
routes.get('/pacientes', PacienteController.listar)
routes.get('/pacientes/:id', PacienteController.listarPorId)
routes.delete('/pacientes/:id', PacienteController.remover)

routes.use(ErrorMiddleware)

module.exports = routes
