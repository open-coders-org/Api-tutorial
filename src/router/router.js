'use strict'

const router = require('express').Router()
const controller = require('../controller/controller')

router.post('/user',controller.save_user)
router.delete('/user/:id',controller.delete_user)



module.exports = {
    router
}