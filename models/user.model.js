const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            // require: true
        },
        email: {
            type: String,
            // require: true,
            unique: true,
        },
        password: {
            type: String,
            // require: true,
        },
        confirmPassword: {
            type: String,
            // require: true,
        },
        image: {
            type: String
        }
    }
)

module.exports = mongoose.model("users", userSchema)