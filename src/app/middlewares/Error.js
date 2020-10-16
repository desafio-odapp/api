module.exports = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('MIDDLEWARE ERROR ---> ', err)
  }

  return res.status(500).json({ error: 'Erro inesperado' })
}
