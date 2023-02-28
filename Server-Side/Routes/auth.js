const express = require("express");
const router = express.Router();
const PlayerController = require("../Controllers/PlayerController");

// login User
router.post("/",PlayerController.PlayerLogin);
module.exports = router;