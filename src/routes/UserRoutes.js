const routes = require("express").Router();

// connect -> userControllers
const userControllers = require("../controllers/UserControllers");

// routes.post("/user",userControllers.addUser);
routes.post("/user",userControllers.addUser1);
routes.get("/users",userControllers.getAllUser);
routes.delete("/user/:id",userControllers.deleteUser);
routes.get("/user/:id",userControllers.getUserById);

module.exports = routes;