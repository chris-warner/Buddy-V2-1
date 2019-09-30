const router = require("express").Router();
const dogRoutes = require("./dogs");

// Post routes
router.use("/dogs", dogRoutes);

module.exports = router;
