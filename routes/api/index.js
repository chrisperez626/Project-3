const router = require("express").Router();
const projectRoutes = require("./projects");
const taskRoutes = require("./tasks");
const usertaskRoutes = require("./usertasks");

router.use("/projects", projectRoutes);
router.use("/tasks", taskRoutes);
router.use("/usertasks",usertaskRoutes);

module.exports = router;