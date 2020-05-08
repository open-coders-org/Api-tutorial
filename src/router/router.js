'use strict'

const router = require('express').Router()
const controller = require('../controller/controller')

router.post('/user',controller.save_user)



module.exports = {
    router
}