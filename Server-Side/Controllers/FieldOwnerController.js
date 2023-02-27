const FieldOwnerValidate = require("../Utils/FieldOwnerValidation");
const FieldOwnerServices = require("../Services/FieldOwnerServices");
var GetAllFieldOwners = async (req, res)=>{
    res.status(200).json(await FieldOwnerServices.GetAllFieldOwners());
};
var GetFieldOwnerByID = async (req, res)=>{
    res.status(200).json(await FieldOwnerServices.GetFieldOwnerByID(req.params.id));
};
var AddNewFieldOwner = (req, res)=>{
    var newFieldOwner = new FieldOwnerServices(req.body);
    if(FieldOwnerValidate(newFieldOwner)){
        if(newFieldOwner.AddFieldOwner()){
            res.status(201).send("Add Successfully !");
        }else{
            res.status(400).send("Not Added !");
        }
    }else{
        res.status(400).send("Validation Not Added !");
    }
};
var UpdateFieldOwner = (req, res)=>{
    var updatedFieldOwner = new FieldOwnerServices(req.body);
    if(FieldOwnerValidate(updatedFieldOwner)){
        if(updatedFieldOwner.UpdateFieldOwner(req.params.id)){
            res.status(201).send("Updated Successfully !");
        }else{
            res.status(400).send("Not Updated !");
        }
    }else{
        res.status(400).send("Validation Not Added !");
    }
};
var DeleteFieldOwner = async (req, res)=>{
    if(FieldOwnerServices.DeleteFieldOwner(req.params.id)){
        res.status(201).send("Deleted Successfully !");
    }else{
        res.status(400).send("Not Deleted !");
    }
};
module.exports = {
    GetAllFieldOwners,
    GetFieldOwnerByID,
    AddNewFieldOwner,
    UpdateFieldOwner,
    DeleteFieldOwner
};