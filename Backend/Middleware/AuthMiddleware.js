const jwt = require('jsonwebtoken');
const AsyncHandler = require("express-async-handler");
const User = require("../Models/UserModel.js")

const protect = AsyncHandler(
    async (req,res,next)=>{
        let token
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            try{
                token = req.headers.authorization.split(" ")[1]
                const decoded = jwt.verify(token,process.env.JWT_SECRET);
                req.user = await User.findById(decoded.id).select("-password")
                next();
            }catch(error){
                console.error(error);
                res.status(401);
                throw new Error("Not Authorized, Token Failure")
            }
        }
        if(!token){
            res.status(401)
            throw new Error("Token Error, NOT authorized")
        }
    }
)

module.exports = protect;