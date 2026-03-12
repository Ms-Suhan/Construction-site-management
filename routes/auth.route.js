const express = require('express')

const {
    userSignIn,
    userSignUp,
    logout
} = require('../controllers/auth.controllers')

const router = express.Router()

router.post('/login', userSignIn)

router.post('/register', userSignUp)

router.get('/logout', logout )


module.exports = router