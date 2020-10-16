module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define('Paciente', {
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    dataCadastro: {
      type: DataTypes.DATE,
      field: 'dataCadastro'
    },
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
  }, {
    tableName: 'paciente'
  })

  return Paciente
}