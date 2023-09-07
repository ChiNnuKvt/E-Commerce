const express = require('express');
const mongoose = require('mongoose');
const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const protect = require('../Middleware/AuthMiddleware.js')
const User = require("../Models/UserModel.js");
const generateToken = require('../utils/generateToken.js')

const userRouter = express.Router();

//REGISTER
userRouter.post("/register",AsyncHandler(
    async (req,res)=>{
        const { name,email,password } = req.body
        const userExists = await User.findOne({ email })
        if(userExists){
            res.status(400)
            throw new Error("User Already EXISTS")
        }
        const user = await User.create({ name,email,password });
        if(user){
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token:generateToken(user._id),
            })
        }else{
            res.status(400)
            throw new Error("Invalid User Data")
        }
    }
))


//LOGIN
userRouter.post("/login", AsyncHandler(
    async(req,res)=>{
        const { email,password } = req.body;
        const user = await User.findOne({ email })
        if(user && (await user.matchPassword(password))){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token:generateToken(user._id),
                createdAt: user.createdAt,
            })
        }
        else{
            res.status(401)
            throw new Error("Invalid Email or Password")
        }
    }
))
//USER PROFILE
userRouter.get("/profile",protect,AsyncHandler(
    async(req,res)=>{
        const user = await User.findById(req.user._id)
        if(user){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
            })
        }
        else{
            res.status(404)
            throw new Error("User Not Found")
        }
    }
))
//UPDATE PROFILE
userRouter.put("/profile",protect,AsyncHandler(
    async (req,res)=>{
        const user = await User.findById(req.user._id)
        if(user){
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email
            if(req.body.password){
                user.password = req.body.password
            }
            const UpdatedUser = await user.save()
            res.json({
                _id: UpdatedUser._id,
                name: UpdatedUser.name,
                email: UpdatedUser.email,
                isAdmin: UpdatedUser.isAdmin,
                createdAt: UpdatedUser.createdAt,
                token: generateToken(UpdatedUser._id)
            })
        }
        else{
            res.status(404);
            throw new Error("User Not Found")
        }
    }
))



module.exports = userRouter