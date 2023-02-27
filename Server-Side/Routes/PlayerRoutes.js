const express = require("express");
const router = express.Router();
const PlayerController = require("../Controllers/PlayerController");
// get all Players
router.get("/",PlayerController.GetAllPlayers)
// get Player by id
router.get("/:id",PlayerController.GetPlayerByID);
// add new Player
router.post("/add",PlayerController.AddNewPlayer);
// update Player by id
router.put("/update/:id",PlayerController.UpdatePlayer);
// delete Player by id
router.delete("/delete/:id",PlayerController.DeletePlayer);
// login User
router.get("/login",PlayerController.UserLogin);
module.exports = router;