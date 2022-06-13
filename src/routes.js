const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const MessageController = require('./controllers/MessageController')

// Users
routes.post('/users', UserController.create)
routes.get('/users', UserController.all)
routes.get('/users/getbyid/:id', UserController.getById)
routes.get('/users/getbyemail/:email', UserController.getByEmail)
routes.put('/users/update/:id', UserController.update)
routes.put('/users/disable/:id', UserController.disable)
// Forgot password


// Messages
routes.get('/messages/inbox/:id_recipient', MessageController.inbox)
routes.get('/messages/important/:id_recipient', MessageController.important)
routes.get('/messages/sent/:id_sender', MessageController.sent)
routes.get('/messages/trash/:id_recipient', MessageController.trash)
routes.post('/messages/compose/:id_sender', MessageController.compose)
routes.get('/messages/read/:id', MessageController.read)
routes.get('/messages/spam/:id_recipient', MessageController.spam)
routes.put('/messages/spam/:id_message', MessageController.report_spam)
routes.put('/messages/delete/:id_message', MessageController.delete)

module.exports = routes