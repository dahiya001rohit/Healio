const express = require('express')
const { sighUpUser, logInUser, todaysUpdate } = require('../controllers/postFunctions')
const { auth } = require('../middleware/auth')
const router = express.Router()

router.route('/signup')
    .post(sighUpUser)
router.route('/login')
    .post(logInUser)
router.route('/todays-update')
    .post(auth, todaysUpdate)

module.exports = router