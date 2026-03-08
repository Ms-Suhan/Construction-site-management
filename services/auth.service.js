require('dotenv').config()
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

function createTokenForUser(user){
    const payload = {
        _id : user._id,
        name : user.name,
        profile_image_url : user.profile_image_url,
        email: user.email,
        role: user.role,
        skills: user.skills,
        phone: user.phone
    }

    const token = jwt.sign(payload, secret)

    return token
}

function validateToken(token){
    if(!token) return null

    const payload = jwt.verify(token, secret)

    return payload
}

module.exports = {
    createTokenForUser,
    validateToken
}