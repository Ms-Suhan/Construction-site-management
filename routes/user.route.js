const express = require('express')
const User = require('../models/user.model')


const router = express.Router()

const {
    getUsers,
    getUser,
    updateUser,
    getMe
} = require('../controllers/user.controllers')



router.get('/users', getUsers)

router.get('/:id',getUser)

router.put('/:id', updateUser)

router.get('/current-user/:id', getMe)


module.exports = router