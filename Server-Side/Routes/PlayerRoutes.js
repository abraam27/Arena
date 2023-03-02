const express = require("express");
const router = express.Router();
const PlayerController = require("../Controllers/PlayerController");
const GameController = require("../Controllers/GameController");
const FieldController = require("../Controllers/FieldController");

// get all Players
router.delete("/delete/:id",PlayerController.DeletePlayer);
router.get("/",PlayerController.GetAllPlayers)
// get Player by id
router.get("/:id",PlayerController.GetPlayerByID);
// add new Player
router.post("/add",PlayerController.AddNewPlayer);
// update Player by id
router.put("/update",PlayerController.UpdatePlayer);
// delete Player by id
router.delete("/delete/:id",PlayerController.DeletePlayer);
// login Player
router.post("/login",PlayerController.PlayerLogin);
// get the uaser his all reservations
router.get("/games/:id",PlayerController.GetAllGames)
// get specific reservation by Id
router.get("/games/:id/:gameId",PlayerController.GetGame)
// create game
router.get("/games/create",GameController.AddNewGame)
// delete game
router.get("/games/:id",GameController.DeleteGame)
// get all valid games
router.get("/fields/valid",FieldController.GetAllValid)

module.exports = router;