const UserModel = require('../Model/userModel')
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.Authenticate = async (req,res,next) =>{
    try {
        const Auth = req.headers.Authenticate
        if(!Auth){
            return res.status(401).json({
                message:`Authorization required`
            })
        }  
        const Token = Auth.split(' ')[1];
        // if(Token){
        //     jwt.verify(Token.process.env.JWT_SECRET,(err,payload)=>{
        //         if(err){
        //             return res.json({
        //                 message:`Error trying to verify`
        //             })
        //         }else{
        //             res.user = payload
        //             next()
        //         }
        //  })
        //}
        if(!Token){
            return res.status(400).json({
                message:`Invalid token`
            })
        }

        //verify the validity of the token
        const decodedToken = jwt.verify(Token,process.env.JWT_SECRET);
        const user = await UserModel.findById(decodedToken.userId)
        if(!user){
            return res.status(400).json({
                message:`Authenticate failed: user not found`
            })
        }

        if(!user.isAdmin){
            return res.status(403).json({
                message:`Authenticate failed: user not an admin`
            })
        }
        req.user = decodedToken
          next();

    } catch (err) {
        if(err instanceof jwt.JsonWebTokenError){
            return res.status(400).json({
                message:'Section timeout'
            })
        }
        res.status(500).json(err.message)
    }
}