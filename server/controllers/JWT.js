require('dotenv').config()
const JWT = require('jsonwebtoken')
const MY_JWT_SECRET = process.env.MY_JWT_SECRET

function getToken(user){
    payload = { 
        name: user.name,
        email: user.email
     }
    return JWT.sign(payload, MY_JWT_SECRET, {
        expiresIn: '10d'
    })
}

function verifyToken(token){
    return JWT.verify(token)
}

module.exports = {
    getToken,
    verifyToken
}