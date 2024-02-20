const router = require("express").Router();
const {getDogs} = require("../controllers/getDogs");
const {getDetailByRaza} = require("../controllers/getDetailByRaza");
const {getDogByName} = require("../controllers/getDogByName");
const {postDog} = require("../controllers/postDogs");


router.get("/", getDogs)
router.get("/:id", getDetailByRaza)
router.get("/name?=", getDogByName)
router.post("/register", postDog)

module.exports = router;