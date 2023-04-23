const user = require('../models/user.model')



module.exports.signUp = async (req, res) => {

    try {

        const newUser = new user(req.body)
        const savedUser = await newUser.save()
        res.send(savedUser)

    } catch (error) {
        console.log(error)

    }
}

module.exports.getUsers = async (req, res) => {

    console.log('user get controller')
    const users = await user.find()
    res.send(users)
} 