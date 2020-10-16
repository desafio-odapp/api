require('dotenv').config({ path: '.env.development' })

module.exports = {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  operatorAliases: false,
  define: {
    timestamps: false,
    underscored: true, // columns name
    underscoredAll: true, // table name
    freezeTableName: true
  }
}
