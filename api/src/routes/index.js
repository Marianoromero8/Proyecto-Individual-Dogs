const router = require('express').Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routeDogs = require ("./dogs");
const routeTemperaments = require("./temperaments")

router.use("/dogs", routeDogs );
router.use("/temperaments", routeTemperaments )




module.exports = router;
