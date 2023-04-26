const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            // require: true
            trim: true,
        },
        email: {
            type: String,
            require: [true, "email is required"],
            unique: true,
            lowercase: true,
            trim: true,

        },
        password: {
            type: String,
            // require: true,
            trim: true,
        },
        confirmPassword: {
            type: String,
            // require: true,
            trim: true,
        },
        image: {
            type: String
        },
        role: {
            type: String,
            default: 'user'
        }
    }
)

module.exports = mongoose.model("users", userSchema)