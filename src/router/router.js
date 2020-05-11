'use strict'

const router = require('express').Router()
const controller = require('../controller/controller')

router.post('/user',controller.save_user)
router.delete('/user/:id',controller.delete_user)
router.get('/user',controller.list_user)
router.get('/user/:id',controller.search_user)
router.put('/user/:id',controller.update_user)

module.exports = {
    router
}