const express = require("express") //express....
const mongoose = require("mongoose") // database.... 
//express object..
const app = express();

app.use(express.json()); // to accept json data

// import Role Routes
const roleRoutes =  require("./src/routes/RoleRoutes");
app.use(roleRoutes);

// import User Routes
const userRoutes = require("./src/routes/UserRoutes");
app.use(userRoutes);

// Database Connectivity
mongoose.connect("mongodb://127.0.0.1:27017/internship_node").then(() => {
    console.log("Database Connected....");
})

//server creation...
const PORT = 3000
app.listen(PORT,()=>{
    console.log("server started on port number ",PORT)
})
