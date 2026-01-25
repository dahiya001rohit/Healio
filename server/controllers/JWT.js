require('dotenv').config()
const JWT = require('jsonwebtoken')
const MY_JWT_SECRET = process.env.MY_JWT_SECRET

function getToken(user){
    payload = { 
        userId: user._id,
        name: user.name,
        email: user.email
     }
    return JWT.sign(payload, MY_JWT_SECRET, {
        expiresIn: '10d'
    })
}

function verifyToken(token){
    return JWT.verify(token, MY_JWT_SECRET)
}

module.exports = {
    getToken,
    verifyToken
}