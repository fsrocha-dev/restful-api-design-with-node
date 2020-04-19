const uuidv4 = require('uuid/v4')
const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  _uuid: { type: String, default: uuidv4() },
  name: String,
  email: String,
  password: String
})

UserSchema.set('toObject', { getters: true });
UserSchema.set('toJSON', { getters: true });

module.exports = new mongoose.model('User', UserSchema)