const mongoose = require('mongoose')
const dailyTrackSchema = new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
    index: true
  },

  date: {
    type: Date,
    required: true,
    index: true
  },

  meals: { type: String, default: 'no-data' },
  calories: { type: Number, default: null },
  protein: { type: Number, default: null },
  carbs: { type: Number, default: null },
  fats: { type: Number, default: null },
  steps: { type: Number, default: null },
  water: { type: Number, default: null },
  sleep: { type: Number, default: null },
  workoutIntensity: { type: String, default: 'Not Done' }
  
}, { timestamps: true }).index({userId:1, date: 1}, {unique: true})


const DailyTrack = mongoose.model('dailyTrack', dailyTrackSchema)
module.exports = DailyTrack