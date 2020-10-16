const { Paciente, sequelize } = require('../models')
const Sequelize = require('sequelize')

class PacienteCore {
  criar (paciente) {
    return Paciente.create(paciente)
  }

  listar () {
    return Paciente.findAll()
  }

  listarPorId (id) {
    return Paciente.findByPk(id)
  }  

  atualizar ({ id, ...paciente }) {
    return Paciente.update(paciente, { where: { id } })
  }

  remover (id) {
    return Paciente.destroy({ where: { id } })
  }
}

module.exports = new PacienteCore()
