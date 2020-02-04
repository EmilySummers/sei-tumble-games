const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/board-game-api'
const secret = process.env.SECRET || 'lalalalalala'

module.exports = { port, dbURI, secret }