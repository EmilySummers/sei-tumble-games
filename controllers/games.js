const Game = require('../models/game')

function index(req, res) {
  Game
    .find()
    .populate('user')
    .then(foundGames => res.status(200).json(foundGames))
    .catch(err => res.json(err))
}

function create(req, res) {
  req.body.user = req.currentUser
  Game
    .create(req.body)
    .then(newGame => res.status(201).json(newGame))
    .catch(err => res.json(err))
}

function show(req, res) {
  Game
    .findById(req.params.id)
    .populate('user')
    .then(selectedGame => res.status(200).json(selectedGame))
    .catch(err => res.json(err))
}

function remove(req, res) {
  Game
    .findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(err => res.json(err))
}

function edit(req, res) {
  Game
    .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then(selectedGame => res.status(202).json(selectedGame))
    .catch(err => res.json(err))
}

function commentCreate(req, res, next) {
  req.body.user = req.currentUser
  Game
    .findById(req.params.id)
    .then(game => {
      if (!game) return res.status(404).json({ message: 'Not Found' }) 
      game.comments.push(req.body) 
      return game.save() 
    })
    .then(game=> res.status(201).json(game)) 
    .catch(next)
}

function commentRemove(req, res) { 
  Game
    .findById(req.params.id) 
    .then(game => {
      if (!game) return res.status(404).json({ message: 'Not Found' })
      const comment = game.comments.id(req.params.commentId) 
      if (!comment.user.equals(req.currentUser._id)) {
        return res.status(401).json({ message: 'Unauthorized' })
      } else {
        return game.save().then(() => res.sendStatus(204))
      }
    })
    .catch(err => res.json(err)) 
}

module.exports = { index, create, show, remove, edit, commentCreate, commentRemove }