const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 5000;

require('dotenv').config()

// internal import
const userRouter = require('./routes/user.route')



app.use('/user', userRouter)







app.get('/', async (req, res) => {
    res.send('Next.js Chat app server is running')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})