const mongoose = require('mongoose')
const { type } = require('node:os')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashPassword: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Users = mongoose.model('users', userSchema)
module.exports = Users