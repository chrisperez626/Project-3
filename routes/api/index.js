const router = require("express").Router();
const projectRoutes = require("./projects");
const taskRoutes = require("./tasks");

router.use("/projects", projectRoutes);
router.use("/tasks", taskRoutes);

module.exports = router;