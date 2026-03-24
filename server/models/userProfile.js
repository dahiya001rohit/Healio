const mongoose = require('mongoose')

const userProfileSchema = new mongoose.Schema({ 

  // ── Reference ─────────────────────────

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    index: true,
    unique: true
  },

  // ── Physical Stats ────────────────────
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [10, 'Age must be at least 10'],
        max: [100, 'Age must be under 100']
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: [true, 'Gender is required']
    },
    height: {
        type: Number,
        required: [true, 'Height is required'], // always in cm
        min: [100, 'Height must be at least 100cm'],
        max: [250, 'Height must be under 250cm']
    },
    weight: {
        type: Number,
        required: [true, 'Weight is required'],  // always stored in kg
        min: [30, 'Weight must be at least 30kg'],
        max: [200, 'Weight must be under 200kg']
    },

    // ── Goals ─────────────────────────────
    goal: {
        type: String,
        enum: ['lose_weight', 'maintain', 'gain_muscle', 'recomposition'],
        required: [true, 'Goal is required']
    },
    activityLevel: {
        type: String,
        enum: ['sedentary', 'light', 'moderate', 'active', 'very_active'],
        required: [true, 'Activity level is required']
    },
    targetWeight: {
        type: Number,
        min: 30,
        max: 200
    },

    // ── Dietary ───────────────────────────
    dietaryPreferences: {
        type: [String],
        enum: ['vegetarian', 'vegan', 'keto',
               'gluten_free', 'dairy_free', 'halal', 'none'],
        default: ['none']
    },
    allergies: {
        type: [String],
        default: []     // e.g. ['nuts', 'shellfish']
    },

    // ── Calculated (auto on save) ──────────
    bmi: {
        type: Number
    },
    dailyCalorieTarget: {
        type: Number
    },
    dailyProteinTarget: {
        type: Number    // grams
    },
    dailyCarbTarget: {
        type: Number    // grams
    },
    dailyFatTarget: {
        type: Number    // grams
    },
    dailyWaterTarget: {
        type: Number    // ml
    }
})

userProfileSchema.pre('save', function(next) {
    
  // 1. BMI
  const heightM = this.height / 100
  this.bmi = parseFloat((this.weight / (heightM * heightM)).toFixed(1))

  // 2. BMR — Mifflin St Jeor equation
  let bmr
  if (this.gender === 'male') {
    bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5
  } else {
    bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161
  }

  // 3. TDEE — multiply by activity multiplier
  const activityMultipliers = {
      sedentary:  1.2,
      light:      1.375,
      moderate:   1.55,
      active:     1.725,
      very_active: 1.9
  }
  const tdee = bmr * activityMultipliers[this.activityLevel]

  // 4. Calorie target — adjust for goal
  const goalAdjustments = {
      lose_weight:   -500,
      maintain:         0,
      gain_muscle:    +300,
      recomposition:  -200
  }
  this.dailyCalorieTarget = Math.round(tdee + goalAdjustments[this.goal])

  // 5. Macros
  // protein: 2g per kg bodyweight
  // fat: 25% of total calories
  // carbs: remainder
  this.dailyProteinTarget = Math.round(this.weight * 2)
  this.dailyFatTarget     = Math.round((this.dailyCalorieTarget * 0.25) / 9)
  this.dailyCarbTarget    = Math.round((this.dailyCalorieTarget - (this.dailyProteinTarget * 4) - (this.dailyFatTarget * 9)) / 4)

  // 6. Water: 35ml per kg bodyweight
  this.dailyWaterTarget = Math.round(this.weight * 35)

  next()
})

const UserProfile = mongoose.model('userProfile', userProfileSchema)
module.exports = UserProfile
