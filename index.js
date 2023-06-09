const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
require('dotenv').config();


// middle ware
app.use(express.json())



// internal import
const userRouter = require('./routes/v1/user.route');
// const { database } = require('./utils/dbConnection');


// database connection
const database = module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    try {
        // mongoose.connect(`mongodb://localhost:27017/NextJsChatApp`, connectionParams)
        mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.c5dej4c.mongodb.net/nextChatApp?retryWrites=true&w=majority`, connectionParams)
            .then(console.log('database connected successfully'))
    } catch (error) {
        console.log(error)
    }
}
database()

// use imported router
app.use('/api/v1/user', userRouter)



app.get('/', async (req, res) => {
    res.send('Next.js Chat app server is running')
})

app.all("*", (req, res) => {
    res.send("NO route found.");
});

process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    })
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})