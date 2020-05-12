'use strict'

const router = require('express').Router()
const controller = require('../controller/controller')
const login_controller = require('../controller/login-controller')
router.post('/user',controller.save_user)
router.delete('/user/:id',controller.delete_user)
router.get('/user' ,controller.list_user)
router.get('/user/:id',controller.search_user)
router.put('/user/:id',controller.update_user)
router.post('/login',login_controller.login)

module.exports = {
    router
}