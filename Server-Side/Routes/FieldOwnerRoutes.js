const express = require("express");
const router = express.Router();
const FieldOwnerController = require("../Controllers/FieldOwnerController");
const FieldController = require("../Controllers/FieldController");
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
// FieldOwner get all fields
router.get("/fields/:id",FieldController.GetAllFieldsByFieldOwnerID);
// FieldOwner get field by id
router.get("/fields/:id",FieldController.GetFieldByID);
// FieldOwner add new field
router.post("/field/add",FieldController.AddNewField);


module.exports = router;