const roleModel = require("../models/RoleModel");
// roleModel == roles

const getAllRoles = async (req,res) => {

    const roles = await roleModel.find();

    res.json({
        message: "role fetch successfully....",
        data:roles
    })
}

const addRole = async (req,res) => {

    //req.body,req.params,req.headers,req.query
    //console.log("request body....", req.body);
    //insert into roles () values()
    //database...

    const savedRole = await roleModel.create(req.body);

    res.json({
        message: "role create successfully....",
        data:savedRole
    })
}

const deleteRole = async (req,res) => {

    // console.log(req.params.id);
    const deletedRole = await roleModel.findByIdAndDelete(req.params.id);

    res.json({
        message : "role delete successfully",
        data:deletedRole
    })
}

const getRoleById = async (req,res) => {

    console.log(req.params.id);
    const foundRole = await roleModel.findById(req.params.id);

    res.json({
        message: "found role successfully",
        data:foundRole
    })
}

module.exports = {
    getAllRoles,addRole,deleteRole,getRoleById
}