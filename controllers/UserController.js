const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

const User = require('../models/User')

// RETURN ALL USERS
router.get('/', function (req, res) {
  User.find({}, function (err, users) {
    if (err) return res.status(500).send("There was a problem finding the users.")
    res.status(200).send(user)
  })
})

// CREATE A NEW USER
router.post('/', function (req, res) {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  },
    function (err, user) {
      if (err) return res.status(500).send("There has a problem adding the information to the database.")
    })
})

module.exports = router