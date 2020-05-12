'use strict'

const router = require('express').Router()
const controller = require('../controller/controller')
const login_controller = require('../controller/login-controller')
const {is_auth} = require ('../../middleware/auth')
const {verify_admin} = require ('../../middleware/rol')
router.post('/user',controller.save_user)
router.delete('/user/:id',is_auth,controller.delete_user)
router.get('/user', is_auth ,controller.list_user)
router.get('/user/:id',is_auth,controller.search_user)
router.put('/user/:id',is_auth,controller.update_user)
router.post('/login',login_controller.login)

module.exports = {
    router
}