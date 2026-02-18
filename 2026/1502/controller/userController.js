const userModel = require('../model/userModel')

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
            res.status(500).send({
                success:false,
                message:"User is already register"
            })
        }
        const newUser = await userModel({username,email,password})
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
module.exports = {registerController}