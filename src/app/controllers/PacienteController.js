const { Paciente } = require('../models')
const pacienteCore = require('../core/PacienteCore')

class PacienteController {
  async criar (req, res, next) {
    try {
      const paciente = await pacienteCore.criar(req.body)
      res.status(201).json({ paciente })
    } catch (err) {
      next(err)
    }
  }

  async listar (req, res, next) {
    try {
      const pacientes = await pacienteCore.listar()
      res.json(pacientes)
    } catch (err) {
      next(err)
    }
  }

  async listarPorId (req, res, next) {
    try {
      const paciente = await pacienteCore.listarPorId(req.params.id)
      res.json({ paciente })
    } catch (err) {
      next(err)
    }
  }

  async atualizar (req, res, next) {
    try {
      await pacienteCore.atualizar(req.body)
      res.status(204).json()
    } catch (err) {
      next(err)
    }
  }

  async remover (req, res, next) {
    try {
      await pacienteCore.remover(req.params.id)
      res.status(204).json()
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new PacienteController()
