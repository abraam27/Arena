const express = require("express");
const router = express.Router();
const FieldController = require("../Controllers/FieldController");
// get all Fields
router.get("/",FieldController.GetAllFields)
// get Field by id
router.get("/:id",FieldController.GetFieldByID);
// add new Field
router.post("/add",FieldController.AddNewField);
// update Field by id
router.put("/update/:id",FieldController.UpdateField);
// delete Field by id
router.delete("/delete/:id",FieldController.DeleteField);
module.exports = router;