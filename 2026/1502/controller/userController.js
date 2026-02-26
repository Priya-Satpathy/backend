const userModel = require('../model/userModel')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken');
const registerController = async(req,res)=>{
    try {
        const{username,email,password} = req.body;

        //validation
        if(!username || !email || !password){
            return(
                res.status(500).send({
                    success:false,
                    message:"All fields are compulsory"
                })
            )
        }

        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return(
                res.status(500).send({
                    success:false,
                    message:"User is already register"
                })
            )
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
       

        const newUser = await userModel({username,email,password:hashedPassword});
        newUser.save();

        res.status(200).send({
            success:true,
            message:"Record added successfully",
            newUser
        })

    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Register API",
            error
        })
    }
}
//login
const loginController = async(req,res)=>{
    try {
        const{email,password} = req.body;

        //validation
        if( !email || !password){
         
            return res.status(500).send({
                    success:false,
                    message:"All fields are compulsory"
            })
            
        }

            
        const existingUser = await userModel.findOne({email})
        if(!existingUser){
            return res.status(500).send({
                success :  false,
                message :"Invalid credential"
            })
        }

        const result = await bcrypt.compare(password,existingUser.password);
        console.log(result);
        
        if(!result){
            return res.status(500).send({
                success:false,
                message:"Invalid credential"
            })
        }

        const token = await JWT.sign({id:existingUser._id},process.env.JWT_SECRET,
        {expiresIn:"1d"});
        res.status(200).send({
            success:true,
            message:"Login successfull",
            user:{
                username:existingUser.username,
                email:existingUser.email,
                token
            }
            
        })

    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Login API",
            error
        })
    }
}

module.exports = {registerController,loginController}