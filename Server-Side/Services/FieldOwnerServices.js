const FieldOwner = require("../Models/FieldOwnerModel");
class FieldOwnerServices{
    constructor(){
        
    }
    static async GetAllFieldOwners(){
        return await FieldOwner.find({});
    }
    static async GetFieldOwnerByID(id){
        return await FieldOwner.findById(id);;
    }
    async AddFieldOwner(){
        var newFieldOwner = new FieldOwner({});
        return await newFieldOwner.save();
    }
    async UpdateFieldOwner(id){
        return await FieldOwner.updateOne({_id:id}, {});
    }
    static async DeleteFieldOwner(id){
        return await FieldOwner.deleteOne({ _id:id});
    }
}
module.exports = FieldOwnerServices;