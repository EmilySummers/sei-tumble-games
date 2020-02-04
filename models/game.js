const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  year: { type: Number, required: true , min: 1900, max: 2020 },
  description: { type: String, required: true, maxLength: 300 },
  minPlayers: { type: Number, required: true },
  maxPlayers: { type: Number },
  age: { type: Number, required: true, min: 1, max: 18 },
  duration: { type: Number, required: true },
  image: { type: String, required: true },
  boardImage: { type: String },
  comments: [commentSchema],
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)