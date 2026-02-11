const Users = require('../models/users')
const bcrypt = require('bcrypt')
const { getToken } = require('./JWT')
const DailyTrack = require('../models/track')

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

async function todaysUpdate(req, res) {
    const { meals, calories, protein, carbs, fats, steps, water, sleep, workoutIntensity} = req.body
    const date = new Date().toISOString().split('T')[0]
    const user = req.user
    
    // Check if data already exists for today
    const existingTrack = await DailyTrack.findOne({ userId: user.userId, date: date })
    if (existingTrack) {
        try {
            const update = await DailyTrack.findOneAndUpdate(
                { userId: user.userId, date: date }, 
                { meals, calories, protein, carbs, fats, steps, water, sleep, workoutIntensity },
                { new: true }
            )
            console.log(update)
            return res.json({ success: `updated`, update })
        } catch (error) {
            return res.json({ error })
        }
    }

    try {
        const update = await DailyTrack.create({
            userId: user.userId,
            date,
            meals, 
            calories, 
            protein, 
            carbs, 
            fats, 
            steps, 
            water, 
            sleep, 
            workoutIntensity
        })
        return res.json({ success: `success`, update })
    } catch (error) {
        return res.json({ error })
    }
    
}

module.exports = {
    sighUpUser,
    logInUser,
    todaysUpdate
}