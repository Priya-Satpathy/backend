const userModel = require('../model/userModel')

const registerController = async(req,res)=>{
    try {
        const{username,email,password} = req.body
        //validation
        if(!username || !email || !password){
            return(
                res.status(500).send({
                    sucess: false,
                    message: "All fields are compulsory"
                })
            )
        }
        
        //user
        const existingUser = await userModel.findOne({email})
              if(existingUser){
            return(
                res.status(500).send({
                    sucess: false,
                    message: "User is already registered"
                })
            )
    }
    //new user
       const newUser = await userModel.findOne({username,email,password})
            newUser.save();  
            
                res.status(200).send({
                    sucess: true,
                    message: "Record added Sucessfully",
                    newUser
                })
            
    
    } catch (error) {
                res.status(500).send({
                            sucess: false,
                            message: "Register API",
                            error
                        })
    }
}

const loginController = async(req,res)=>{
    try {
        
        const{email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(500).send({
                success :  false,
                message :"All fields are compulsory"
            })
        }
        const existingUser = await userModel.findOne({email,password})
        if(!existingUser){
            return res.status(500).send({
                success :  false,
                message :"Invalid credential"
            })
        }
    
          res.status(200).send({
                success :  true,
                message :"Login Sucessful",
                user:{
                    username : existingUser.username,
                    email : exist.email
                }
            })
    } catch (error) {
        res.status(500).send({
            success : false,
            message: "Login API",
            error
        })
    }
}
module.exports = {registerController,loginController}