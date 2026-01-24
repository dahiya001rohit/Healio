require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT
const postRouter = require('./routers/postRouter')
const cors = require('cors')
const { connectDb } = require('./controllers/connectDatabase')

connectDb(process.env.MONGO_URL)
    .then(console.log(`Mongo Connected`))
    .catch(e => console.log(`An error occured while connecting Mongo: ${e}`))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', postRouter)
app.get('/', (req, res)=>{
    console.log(`reached`)
})
app.listen(PORT, () => {
    console.log(`Started at ${PORT}`)
})