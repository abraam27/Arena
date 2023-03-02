const express = require("express");
const router = express.Router();
const AdminController = require("../Controllers/AdminController");
const PlayerController = require("../Controllers/PlayerController");
const FieldController = require("../Controllers/FieldController");
const FieldOwnerController = require("../Controllers/FieldOwnerController");
const GameController = require("../Controllers/GameController");

//#region of player
// get all Players
router.get("/player/",PlayerController.GetAllPlayers)
// get Player by id
router.get("/player/:id",PlayerController.GetPlayerByID);
// delete Player by id
router.delete("/player/delete/:id",PlayerController.DeletePlayer);
// login User
router.get("/login",PlayerController.PlayerLogin);
//#endregion of player

//#region of fields
// get the not valid games
router.get("/fields/n",FieldController.GetNotValid)
// get all Fields
router.get("/fields",FieldController.GetAllFields)
// get Field by id
router.get("/fields/:id",FieldController.GetFieldByID);
// update field
router.put("/fields/update",FieldController.UpdateField);
// delete Field by id
router.delete("/fields/delete/:id",FieldController.DeleteField);

//#endregion of fields

//#region of fieldOwner
// get all FieldOwners
router.get("/fieldOwners/",FieldOwnerController.GetAllFieldOwners)
// get FieldOwner by id
router.get("/fieldOwners/:id",FieldOwnerController.GetFieldOwnerByID);
// delete FieldOwner by id
router.delete("/fieldOwners/delete/:id",FieldOwnerController.DeleteFieldOwner);
//#endregion of fieldOwner

//#region of game
// get all Games
router.get("/",GameController.GetAllGames)
// get Game by id
router.get("/:id",GameController.GetGameByID);
// delete Game by id
router.delete("/delete/:id",GameController.DeleteGame);
//#endregion of game

module.exports = router;
