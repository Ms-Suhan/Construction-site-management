const express = require('express')
const User = require('../models/user.model')


const router = express.Router()

const {
    userSignUp,
    userSignIn,
    getUsers,
    getUser,
    updateUser,
    logout
} = require('../controllers/user.controllers')

router.post('/login', userSignUp)

router.post('/register', userSignIn)

router.get('/logout', logout )

router.get()

module.exports = router