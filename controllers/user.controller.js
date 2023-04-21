const user = require('../models/user.model')



module.exports.signUp = async (req, res) => {

    const newUser = new user({ name: 'nasir', email: 'nasir@gmail.com' })

    const savedUser = await newUser.save()
    res.cookie('token', 'set token')
    console.log('user controller')
    res.send('user again hit')
}