const express = require('express')
const router = express.Router()

router.route('/signup')
    .post((req,res) => {
        console.log(`reached`)
        return res.json({ success: 'success'})
    })
router.route('/login')
    .post((req,res) => {
        console.log(`reached`)
        return res.json({ success: 'success'})
    })

module.exports = router