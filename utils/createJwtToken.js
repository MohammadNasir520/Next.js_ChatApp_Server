const jwt = require('jsonwebtoken');
exports.createToken = (email) => {
    return token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
}