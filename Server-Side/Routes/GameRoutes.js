const express = require("express");
const router = express.Router();
const GameController = require("../Controllers/GameController");
// get all Games
router.get("/",GameController.GetAllGames)
// get Game by id
router.get("/:id",GameController.GetGameByID);
// add new Game
router.post("/add",GameController.AddNewGame);
// update Game by id
router.put("/update",GameController.UpdateGame);
// delete Game by id
router.delete("/delete/:id",GameController.DeleteGame);
module.exports = router;