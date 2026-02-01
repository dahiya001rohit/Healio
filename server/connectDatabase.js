const mongoose = require('mongoose')

async function connectDb(URL) {
    await mongoose.connect(URL)
}

module.exports = {
    connectDb
}
