const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

const User = require('./User')

module.exports = {

  // RETURN ALL USERS
  async index(req, res) {
    const users = await User.find()
    if (!users) {
      return res.status(500).send("There was a problem finding the users.")
    }
    return res.json(users)
  },

  // CREATE A NEW USER
  async store(req, res) {
    try {

      const user = User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })

      return res.json(user)

    } catch (error) {
      console.error('Store user: ', error)
      res.status(500).send(error)
    }
  }
}