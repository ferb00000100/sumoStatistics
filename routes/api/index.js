const router = require("express").Router();
const collectors = require("./collectors");


router.use("/api/collectors",collectors);


module.exports = router;