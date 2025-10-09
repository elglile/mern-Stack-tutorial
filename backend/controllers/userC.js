const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userm");


//@desc Register new user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    // check if all fields are filled
    if (!username || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    // check if username is exist
    const userExist = await User.findOne({ email })
    if (userExist) {
        res.status(400)
        throw new Error('User already exist')
    }
    // hash password
    // had star katgeneratei wa7d salt li howa wa7d lcode li kayzid lhash
    const salt = await bcrypt.genSalt(10)
    // had star kathashi password m3a salt
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    // check creation the user
    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            // role: user.role,
            token : generateTocken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
});

//@desc Authenticate a user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // check for user email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
        message: "Login success",
        _id: user.id,
        username: user.username,
        email: user.email,
        // role: user.role,
        token : generateTocken(user._id)
        }
    )
        
    } else {
        res.status(400)
        throw new Error('Invalid check data')
    }
});


//@desc Get user Data   
//@route Get  /api/users/me
//@access Private
const getMe = asyncHandler(async (req, res) => {
    // res.json({ message: "User data" });
    const {_id , username, email } = await User.findById(req.user.id)
    res.status(200).json(
        {
            id : _id ,
            username,
            email,
        }
    )
});


// generate JWT
const generateTocken = (id) =>{
    return jwt.sign(
        {id}, 
        process.env.JWT_SECRET , {
        expiresIn: '7d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
};