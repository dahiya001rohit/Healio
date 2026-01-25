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
    const track = { meals, calories, protein, carbs, fats, steps, water, sleep, workoutIntensity, date: (new Date().toISOString().split('T')[0])}
    const user = req.user
    try {
        const update = await DailyTrack.create({
            userId: user.userId,
            date: track.date,

            meals: track.meals, 
            calories: track.calories, 
            protein: track.protein, 
            carbs: track.carbs, 
            fats: track.fats, 
            steps: track.steps, 
            water: track.water, 
            sleep: track.sleep, 
            workoutIntensity: track.workoutIntensity

        })
        console.log(update)
        return res.json({ success: `success`})
    } catch (error) {
        if(error.code === 11000) return res.json({ error: `Cannot update twice a day` })
        return res.json({ error })
    }
    
}

module.exports = {
    sighUpUser,
    logInUser,
    todaysUpdate
}