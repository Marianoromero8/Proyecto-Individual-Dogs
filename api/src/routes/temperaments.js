const router = require("express").Router();
const getTemperament = require("../controllers/getTemperaments");


router.get("/", getTemperament)