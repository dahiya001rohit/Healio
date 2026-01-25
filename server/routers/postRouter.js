const express = require('express')
const { sighUpUser, logInUser, todaysUpdate } = require('../controllers/postFunctions')
const router = express.Router()

router.route('/signup')
    .post(sighUpUser)
router.route('/login')
    .post(logInUser)
router.route('/todays-update')
    .post(todaysUpdate)

module.exports = router