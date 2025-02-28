// connect -> userModel
const userModel = require("../models/UserModel");

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
    getAllUser,addUser,deleteUser,getUserById,addUser1
}