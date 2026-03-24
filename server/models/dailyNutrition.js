const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name:     { type: String, required: true },
    quantity: { type: Number, required: true }, // in grams or ml
    unit:     { type: String, default: 'g' },
    calories: { type: Number, required: true },
    protein:  { type: Number, required: true },
    carbs:    { type: Number, required: true },
    fat:      { type: Number, required: true },
}, { _id: false })

// ── Meal (contains multiple foods) ───────
const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['breakfast', 'lunch', 'dinner', 'snack'],
        required: true
    },
    time:  { type: Date },
    foods: [foodSchema],

    // auto-summed from foods
    totalCalories: { type: Number, default: 0 },
    totalProtein:  { type: Number, default: 0 },
    totalCarbs:    { type: Number, default: 0 },
    totalFat:      { type: Number, default: 0 },
}, { _id: true })

// ── Water entry with timestamp ─────────────
const waterEntrySchema = new mongoose.Schema({
    amount:    { type: Number, required: true },  // ml
    loggedAt:  { type: Date, default: Date.now }, // exact time
    period: {
        type: String,
        enum: ['morning', 'afternoon', 'evening', 'night'],
        required: true
    }
}, { _id: false })

// ── Daily nutrition document ───────────────
const dailyNutritionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    date: {
        type: Date,
        required: true
    },
    meals: [mealSchema],
    // ── Water ─────────────────────────────
    waterEntries: [waterEntrySchema],
    waterByPeriod: {
        morning:   { type: Number, default: 0 },
        afternoon: { type: Number, default: 0 },
        evening:   { type: Number, default: 0 },
        night:     { type: Number, default: 0 },
    },
    totalWater: { type: Number, default: 0 },  // ml

    // auto-summed from all meals
    dayTotals: {
        calories: { type: Number, default: 0 },
        protein:  { type: Number, default: 0 },
        carbs:    { type: Number, default: 0 },
        fat:      { type: Number, default: 0 },
    }

}, { timestamps: true })

// ── Compound index — one doc per user per day
dailyNutritionSchema.index({ userId: 1, date: 1 }, { unique: true })

dailyNutritionSchema.pre('save', function(next) {

    this.meals.forEach(meal => {
        meal.totalCalories = meal.foods.reduce((s, f) => s + f.calories, 0)
        meal.totalProtein  = meal.foods.reduce((s, f) => s + f.protein,  0)
        meal.totalCarbs    = meal.foods.reduce((s, f) => s + f.carbs,    0)
        meal.totalFat      = meal.foods.reduce((s, f) => s + f.fat,      0)
    })

    this.dayTotals.calories = this.meals.reduce((s, m) => s + m.totalCalories, 0)
    this.dayTotals.protein  = this.meals.reduce((s, m) => s + m.totalProtein,  0)
    this.dayTotals.carbs    = this.meals.reduce((s, m) => s + m.totalCarbs,    0)
    this.dayTotals.fat      = this.meals.reduce((s, m) => s + m.totalFat,      0)

    // water by period from entries
    this.waterByPeriod = { morning: 0, afternoon: 0, evening: 0, night: 0 }
    this.waterEntries.forEach(entry => {this.waterByPeriod[entry.period] += entry.amount})
    this.totalWater = this.waterEntries.reduce((s, e) => s + e.amount, 0)
    next()
})

const DailyNutrition = mongoose.model('dailyNutrition', dailyNutritionSchema)
module.exports = DailyNutrition