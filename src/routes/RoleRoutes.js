const routes = require("express").Router();
const roleControllers =  require("../controllers/RoleControllers");

routes.get("/roles",roleControllers.getAllRoles);
routes.post("/role",roleControllers.addRole);
routes.delete("/role/:id",roleControllers.deleteRole);
routes.get("/role/:id",roleControllers.getRoleById)

module.exports = routes;