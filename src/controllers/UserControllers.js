// connect -> userModel
const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");  // for hashed password

// login api
const loginUser = async (req,res) => {

    const email = req.body.email;
    const password = req.body.password;

    const foundUserFromEmail = await userModel.findOne({email:email});
    console.log(foundUserFromEmail);
    
    
    if(foundUserFromEmail != null){

        const isMatch = bcrypt.compareSync(password,foundUserFromEmail.password);

        if(isMatch == true){
            res.status(200).json({
                message:"login success",
                data:foundUserFromEmail
            })
        }
        else{
            res.status(404).json({
                message:"Invalid crendients..."
            })
        }
        
    }
   else{
       res.status(404).json({
        message:"Emial not found..."
       })
   }
    
}

// signup api
const signup = async (req,res) =>{

    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password,salt);

        req.body.password = hashedPassword;
        const createdUser = await userModel.create(req.body);
        res.status(201).json({
            message: "create user successfully",
            data:createdUser
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"Error.....",
            data:err
        })
    }

}

// with try catch block 
const addUser1 = async (req,res) => {

    try {
        const createdUser = await userModel.create(req.body);
    
        res.json({
            message:"create user successfully",
            data:createdUser
        });
    } catch (err) {
        
        res.status(500).json({
            message:"err",
            data:err
        })
    }
}

// normal add function without try catch block
const addUser = async (req,res) => {

    const savedUser = await userModel.create(req.body);

    res.json({
        message : "Create User Successfully",
        data:savedUser
    })
}

// getAllUser
const getAllUser = async (req,res) => {

    const users = await userModel.find().populate("roleId");

    res.json({
        message:"Get All User successfully....",
        data:users
    })
}

const deleteUser = async (req,res) => {

    const deletedUser = await userModel.findByIdAndDelete(req.params.id);

    res.json({
        message:"Delete User successfully...",
        data:deletedUser
    })
}

const getUserById = async (req,res) => {

    const foundUser = await userModel.findById(req.params.id);

    res.json({
        message: "Found User Successfully....",
        data:foundUser
    })
}

module.exports = {
    getAllUser,addUser,deleteUser,getUserById,addUser1,signup,loginUser
}