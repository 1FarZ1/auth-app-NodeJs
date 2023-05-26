const express = require('express')
const mainRouter = express.Router()

const { login, dashboard } = require('../controllers/index')

const authMiddleware = require('../middlewares/auth')

mainRouter.route('/dashboard').get(authMiddleware, dashboard)
mainRouter.route('/login').post(login)

module.exports = mainRouter
