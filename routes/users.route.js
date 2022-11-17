const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router.get("/users", usersController.getUsers);


router.post("/users", usersController.saveUser)

module.exports = router;