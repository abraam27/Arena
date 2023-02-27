const Field = require("../Models/FieldModel");
class FieldServices{
    constructor(){
        
    }
    static async GetAllFields(){
        return await Field.find({});
    }
    static async GetFieldByID(id){
        return await Field.findById(id);;
    }
    async AddField(){
        var newField = new Field({});
        return await newField.save();
    }
    async UpdateField(id){
        return await Field.updateOne({_id:id}, {});
    }
    static async DeleteField(id){
        return await Field.deleteOne({ _id:id});
    }
}
module.exports = FieldServices;