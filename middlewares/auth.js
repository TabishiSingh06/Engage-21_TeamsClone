const jwt = require('jsonwebtoken');
require('dotenv/config');

module.exports = function (req, res, next) {
    //Get the token from the header
    const token = req.header('x-auth-token');

    //check if no token 
    if (!token) {
        return res.status(401).json({ msg: 'Authorisation denied : No token' });
    }

    //Token Verification
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Invalid Token" });
    }
};