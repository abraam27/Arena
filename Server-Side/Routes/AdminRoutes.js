const express = require("express");
const router = express.Router();
const AdminController = require("../Controllers/AdminController");
const PlayerController = require("../Controllers/PlayerController");
const FieldController = require("../Controllers/FieldController");
const FieldOwnerController = require("../Controllers/FieldOwnerController");
const GameController = require("../Controllers/GameController");
const LoginController = require("../Controllers/LoginController");

//#region of player
// get all Players
router.get("/player/",PlayerController.GetAllPlayers)
// get Player by id
router.get("/player/:id",PlayerController.GetPlayerByID);
// delete Player by id
router.delete("/player/delete/:id",PlayerController.DeletePlayer);
//#endregion of player

//#region of fields
// get all Fields
router.get("/fields/",FieldController.GetAllFields)
// get Field by id
router.get("/fields/:id",FieldController.GetFieldByID);
// update field
router.put("/fields/update/:id",FieldController.UpdateField);
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
//#endregion of game

module.exports = router;
