const Users = require('../models/users')
const bcrypt = require('bcrypt')
const { getToken } = require('./JWT')

async function sighUpUser(req, res) {
    const { name, email, password} = req.body
    const user = await Users.findOne({ email })
    if(user) return res.json({error: `Alreadt existing user, Login`})
    const hashPassword = await bcrypt.hash(password, 10)
    try {
        const user = await Users.create({
            name: name,
            email: email,
            hashPassword: hashPassword
        })
        const token = getToken(user)
        return res.json({ token })
    } catch (error) {
        return res.json({ error: error })
    }
}

async function logInUser(req, res) {
    const { email, password } = req.body
    console.log(email, password)
    try {
        const user = await Users.findOne({ email: email })
        if(!user) return res.json({error: `Incorrect Email`})
        const valid = await bcrypt.compare(password, user.hashPassword)
        if(!valid){
            return res.json({error: `Incorrect Password`})
        }
        const token = getToken(user)
        return res.json({ token })
    } catch (error) {
        return res.json({ error: error })
    }   
}

module.exports = {
    sighUpUser,
    logInUser
}