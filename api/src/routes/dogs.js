const router = require("express").Router();
const {getAllsDogs} = require("../controllers/getDogs");
const {getDetailByRaza} = require("../controllers/getDetailByRaza");
const {getDogByName} = require("../controllers/getDogByName");
const {postDog} = require("../controllers/postDogs");


router.get("/", getAllsDogs)
router.get("/:id", getDetailByRaza)
router.get("/name/:name", getDogByName)
router.post("/register", postDog)

module.exports = router;