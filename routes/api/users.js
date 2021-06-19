const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv/config');
const { validationResult, check } = require('express-validator');
//Import user schema
const User = require('../../models/Users')
//@route     POST api/users
//@access    public
//@desc      Register a new user
router.post(
    '/', [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Please include a valid email')
        .isEmail(),
    check('password', 'Please enter a valid password ( length > 5')
        .isLength({ min: 5 })

], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        // See if user exists 
        if (user) {
            return res.status(400).json({
                errors: [
                    {
                        msg: 'User already exists'
                    }
                ]
            });
        }
        // Get users gravatar
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        user = new User({
            name,
            email,
            avatar,
            password,
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        //Save User
        await user.save();
        // console.log(req.body);

        // Return jsonWebToken(jwt)
        const payload = {
            user: {
                id: user.id
            }
        }
        //JWT signature
        jwt.sign(payload, process.env.JWT_SECRET_TOKEN,
            {
                expiresIn: 360000
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