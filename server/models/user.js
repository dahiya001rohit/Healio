const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    // ── Auth ──────────────────────────────
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
    },

    // optional — null for Google users
    password: {
        type: String,
        minlength: 6,
        select: false,
        default: null
    },

    // ── Google OAuth ───────────────────────
    googleId: {
        type: String,
        unique: true,
        sparse: true,   // allows multiple null values
        default: null
    },
    authProvider: {
        type: String,
        enum: ['local', 'google'],
        default: 'local'
    },

    // ── Profile ───────────────────────────
    profilePicture: {
        type: String,
        default: null   // Google gives this automatically
    },

    // ── Status ────────────────────────────
    onboardingCompleted: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },

    // ── Tokens ────────────────────────────
    refreshToken: {
        type: String,
        select: false,
        default: null
    }

}, { timestamps: true })

const User = mongoose.model('user', userSchema)
module.exports = User