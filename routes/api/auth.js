const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const User = require('../../models/Users');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
require('dotenv/config');
const { validationResult, check } = require('express-validator');

// @route     GET api/auth
// @desc      Test Route
// @access    public

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route     POST api/auth
//@access    public
//@desc      Authenticate user and Get Token
router.post(
    '/', [
    check('email', 'Please include a valid email')
        .isEmail(),
    check('password', 'Please enter your password!!')
        .exists()
], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });

        // See if user exists 
        if (!user) {
            return res.status(400).json({
                errors: [
                    {
                        msg: 'Not a valid user!'
                    }
                ]
            });
        }
        //match the password with the found user
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                errors: [
                    {
                        msg: 'Not a valid user!'
                    }
                ]
            });
        }
        // Return jsonWebToken(jwt)
        const payload = {
            user: {
                id: user.id
            }
        }
        //JWT signature
        jwt.sign(payload, process.env.JWT_SECRET_TOKEN,
            {
                expiresIn: '30d',
            },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}
);

module.exports = router;