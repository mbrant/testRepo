"use strict"

const router = require('express').Router()
const contactControllerFactory = require('../controllers/contact.controller')

module.exports = apiPrefix => {
    const contactController = contactControllerFactory(apiPrefix)

    router.post('/', contactController.send)
    
    return router
}