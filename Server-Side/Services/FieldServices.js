const Field = require("../Models/FieldModel");
class FieldServices{
    constructor(fieldName,location,price,rate,fieldOwnerId,valid){
        this.fieldName=fieldName;
        this.location=location;
        this.price=price;
        this.rate=rate;
        this.fieldOwnerId=fieldOwnerId;
        this.valid=valid;
    }
    static async GetAllFields(){
        return await Field.find({});
    }
    static async GetFieldByID(id){
        return await Field.findById(id);;
    }
    async AddField(){
        var newField = new Field({ fieldName: this.fieldName, location: this.location, price: this.price, rate: this.rate, fieldOwnerId: this.fieldOwnerId,valid:this.valid});
        // let foundUser = await Field.find({fieldName:newField.fieldName}).exec();//null
        
            await newField.save();
            return true;
        
    }
    async UpdateField(id){
        return await Field.updateOne({_id:id}, {});
    }
    static async DeleteField(id){
        return await Field.deleteOne({ _id:id});
    }
}
module.exports = FieldServices;