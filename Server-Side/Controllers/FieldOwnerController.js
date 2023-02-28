const FieldOwnerValidate = require("../Utils/FieldOwnerValidation");
const AuthValidation = require("../Utils/AuthValidation");
const FieldOwnerServices = require("../Services/FieldOwnerServices");
const bcrypt= require("bcrypt");

var FieldOwnerLogin = async (req, res)=>{
    var fieldOwnerData = req.body;
    if(AuthValidation(fieldOwnerData)){
        const token = await FieldOwnerServices.LoginFieldOwner(fieldOwnerData)
        if(token){
            res.header("X-Auth-Token", token)
            res.status(200).send("Logged in");
        }else{
            res.status(400).send("Not Logged in");
        }
    }else{
        res.status(400).send("Not Valid !");
    }
}
var GetAllFieldOwners = async (req, res)=>{
    res.status(200).json(await FieldOwnerServices.GetAllFieldOwners());
};
var GetFieldOwnerByID = async (req, res)=>{
    res.status(200).json(await FieldOwnerServices.GetFieldOwnerByID(req.params.id));
};
var AddNewFieldOwner = async (req, res)=>{
    var HashedPassword = await bcrypt.hash(req.body.password,10);
    var newFieldOwner = new FieldOwnerServices(req.body.fullName, req.body.phone, req.body.userName, HashedPassword);
    var newFieldOwnerr = {...newFieldOwner, password:req.body.password};
    if(FieldOwnerValidate(newFieldOwnerr)){
        if(await newFieldOwner.AddFieldOwner()){
            res.status(201).send("Add Successfully !");
        }else{
            res.status(400).send("Not Added !");
        }
    }else{
        res.status(400).send("Validation Not Added !");
        console.log(PlayerValidate.errors)
    }
};
var UpdateFieldOwner = async (req, res)=>{
    var HashedPassword = await bcrypt.hash(req.body.password,10);
    var updatedFieldOwner = new FieldOwnerServices(req.body.fullName, req.body.phone, req.body.userName, HashedPassword);
    if(FieldOwnerValidate(updatedFieldOwner)){
        if(updatedFieldOwner.UpdateFieldOwner(req.body._id)){
            res.status(201).send("Updated Successfully !");
        }else{
            res.status(400).send("Not Updated !");
        }
    }else{
        res.status(400).send("Validation Not Added !");
        console.log(PlayerValidate.errors);
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
    DeleteFieldOwner,
    FieldOwnerLogin
};