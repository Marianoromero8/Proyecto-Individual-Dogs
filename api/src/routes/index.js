const router = require('express').Router();
const routeDogs = require ("./dogs");
const routeTemperaments = require("./temperaments")

router.use("/dogs", routeDogs );
router.use("/temperaments", routeTemperaments )

module.exports = router;