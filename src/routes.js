const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')

// Forgot password
routes.post('/users', UserController.create)
routes.get('/users', UserController.all)
routes.get('/users/getbyid/:id', UserController.getById)
routes.get('/users/getbyemail/:email', UserController.getByEmail)
routes.put('/users/update/:id', UserController.update)
routes.put('/users/disable/:id', UserController.disable)

module.exports = routes