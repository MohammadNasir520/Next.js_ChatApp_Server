const user = require('../models/user.model')

const { createToken } = require('../utils/createJwtToken');



module.exports.signUp = async (req, res) => {

    try {
        const email = req.body.email;
        const existingUser = await user.find({ email: email });
        // console.log(existingUser)
        if (existingUser.length > 0) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'user already exist',
                }
            )
        }

        const newUser = new user(req.body)
        const savedUser = await newUser.save()

        if (savedUser) {
            const token = await createToken(email)
            res.status(200).json(
                {
                    success: true,
                    message: 'user successfully created',
                    data: savedUser,
                    token
                }
            )
        }

    } catch (error) {
        console.log(error)
        res.status(400).json(
            {
                success: false,
                message: 'user not created',
                error: error.message
            }
        )

    }
}

module.exports.login = async (req, res) => {

    try {
        const email = req.body.email;
        const existingUser = await user.find({ email: email });
        // console.log(existingUser)
        if (existingUser.length <= 0) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'user does not exist',
                }
            )
        }


        const token = await createToken(email)


        res.status(200).json(
            {
                success: true,
                message: 'user successfully loggedIn',
                data: existingUser,
                token
            }
        )

    } catch (error) {
        console.log(error)
        res.status(400).json(
            {
                success: false,
                message: 'user not loggedIn',
                error: error.message
            }
        )

    }
}



module.exports.getAllUser = async (req, res) => {
    try {
        const users = await user.find()
        res.status(200).json(
            {
                success: true,
                data: users
            }
        )
    } catch (error) {
        res.status(400).json(
            {
                success: false,
                message: 'something went wrong',
                error: error.message
            }
        )

    }

} 