const { request } = require("express")
const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helper/auth')
const jwt = require('jsonwebtoken')


const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, password } = req.body;
        if (!name) {
            return res.json({
                error: 'name is require'
            })
        }
        if (!password || password.length < 6) {
            return res.json({
                error: 'password is require and should be atleast 6 char long'
            })
        }
        const exist = await User.findOne({ email })
        if (exist) {
            return res.json({
                error: 'erroe email is already taken'
            })
        }
        const hashedPassword = await hashPassword(password)
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({
                error: "no user found"
            })
        }
        const match = await comparePassword(password, user.password)
        if (match) {
            jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {} , (err, token) => {
                if (err)throw err;
                res.cookie('token', token).json(user);
            })
        }
        if (!match) {
            res.json({
                error: "password or email is invalid"
            })
        }
    }
    catch (error) {
        console.log(error)
    }
}

const getProfile=(req,res)=>{
    const {token}=req.cookies
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
            if(err)throw err;
            res.json(user)
        })
    }
    else{
        res.json(null)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}