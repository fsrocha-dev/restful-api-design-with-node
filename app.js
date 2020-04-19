const express = require('express')
const app = express()
const db = require('./db')

// Import Domain User Routes
const UserRoutes = require('./user/routes')

app.use(UserRoutes)

module.exports = app