const uuidv4 = require('uuid/v4')
const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  _uuid: { type: String, default: uuidv4() },
  name: String,
  email: String,
  password: String
})

mongoose.model('User', UserSchema)

module.exports = mongoose.model('User')