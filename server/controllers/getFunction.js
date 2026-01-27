const DailyTrack = require('../models/track')

async function getTrack(req, res){
    const userId = req.user.userId
    try {
        const track = await DailyTrack.find( { userId: userId })
        console.log(track)
        return res.json({ track })
    } catch (error) {
        return res.json({ error })
    }
    
}

module.exports = {
    getTrack,
}