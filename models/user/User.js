const uuidv4 = require('uuid/v4')
const mongoose = require('mongoose')

// Will add the UUID type to the Mongoose Schema types
require('mongoose-uuid2')(mongoose)
const UUID = mongoose.Types.UUID

const UserSchema = new mongoose.Schema({
  _uuid: { type: UUID, default: uuidv4 },
  name: String,
  email: String,
  password: String
})

mongoose.model('User', UserSchema)

module.exports = mongoose.model('User')