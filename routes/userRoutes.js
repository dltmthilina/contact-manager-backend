
const express = require("express");
const { userRegister, userLogin, userCurrent } = require("../controllers/userControllers");

const router = express.Router();

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/current", userCurrent)


module.exports = router