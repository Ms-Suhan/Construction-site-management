const express = require('express')
const User = require('../models/user.model')


const router = express.Router()

const {
    userSignUp,
    userSignIn,
    getUsers,
    getUser,
    updateUser,
    logout,
    getMe
} = require('../controllers/user.controllers')

router.post('/login', userSignUp)

router.post('/register', userSignIn)

router.get('/logout', logout )

router.get('/users', getUsers)

router.get('/:id',getUser)

router.put('/:id', updateUser)

router.get('/current-user/:id', getMe)


module.exports = router