const router = require('express').Router()
const games = require('../controllers/games')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/games')
  .get(games.index)
  .post(secureRoute, games.create)

router.route('/games/:id')
  .get(games.show)
  .delete(secureRoute, games.remove)
  .put(secureRoute, games.edit)

router.route('/games/:id/comments') 
  .post(secureRoute, games.commentCreate)

router.route('/games/:id/comments/:commentId') 
  .delete(secureRoute, games.commentRemove)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router