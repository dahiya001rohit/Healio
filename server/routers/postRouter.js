const express = require('express')
const { sighUpUser, logInUser } = require('../controllers/postFunctions')
const router = express.Router()

router.route('/signup')
    .post(sighUpUser)
router.route('/login')
    .post(logInUser)

module.exports = router