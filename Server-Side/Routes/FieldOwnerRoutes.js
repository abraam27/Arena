const express = require("express");
const router = express.Router();
const FieldOwnerController = require("../Controllers/FieldOwnerController");
const FieldController = require("../Controllers/FieldController");
const GameController = require("../Controllers/GameController");
// get all FieldOwners
router.get("/",FieldOwnerController.GetAllFieldOwners)
// get FieldOwner by id
router.get("/:id",FieldOwnerController.GetFieldOwnerByID);
// add new FieldOwner
router.post("/add",FieldOwnerController.AddNewFieldOwner);
// update FieldOwner by id
router.put("/update",FieldOwnerController.UpdateFieldOwner);
// delete FieldOwner by id
router.delete("/delete/:id",FieldOwnerController.DeleteFieldOwner);
// login Player
router.post("/login",FieldOwnerController.FieldOwnerLogin);

//#region of FieldOwner CRUD operations with Fields
// FieldOwner get all fields
router.get("/fields/:id",FieldController.GetAllFieldsByFieldOwnerID);
// FieldOwner get field by id
router.get("/fields/field/:id",FieldController.GetFieldByID);
// FieldOwner add new field
router.post("/fields/add",FieldController.AddNewField);
// FieldOwner add new field
router.put("/fields/update",FieldController.UpdateField);
// delete FieldOwner by id
router.delete("/fields/delete/:id",FieldController.DeleteField);
//#endregion of FieldOwner CRUD operations with Fields

//#region of FieldOwner CRUD operations with Games
// FieldOwner get all games
router.get("/games/:id",GameController.GetAllGamesByFieldID);
// FieldOwner get game by id
router.get("/games/game/:id",GameController.GetGameByID);
// FieldOwner add new field
router.post("/games/add",GameController.AddNewGame);
// FieldOwner add new field
router.put("/games/update",GameController.UpdateGame);
// delete FieldOwner by id
router.delete("/games/delete/:id",GameController.DeleteGame);
//#endregion of FieldOwner CRUD operations with Games

module.exports = router;