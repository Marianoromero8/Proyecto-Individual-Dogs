const router = require("express").Router();
const {getTemperamentFromDB} = require("../controllers/getTemperaments");

router.get("/", getTemperamentFromDB)

module.exports = router;