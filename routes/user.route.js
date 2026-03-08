const express = require('express')
const User = require('../models/user.model')


const router = express.Router()

router.post('/signup', async (req , res) => {
    // console.log(req.body);
    
    const {name, password, email, phone} = req.body

    const user = await User.findOne({email})

     if(user){
        res.send("email already exists")
     }

     await User.create({
        name: name,
        password: password,
        email: email,
        phone: phone
     })

     res.redirect('/')
})

router.post('/signin', async (req, res) => {
    const {email, password} = req.body

    console.log(req.body);

    try {
        const token = await User.matchPasswordAndGenerateToken(email, password)

        if(!token) res.send("sign in no token")

        res.cookie("token", token)
        res.send("signin complete")
    } catch (error) {
            return res.send(error)
    }

})

router.get('/logout', (req, res) => {
    res.clearCookie("token").send("logout complete")
})

module.exports = router