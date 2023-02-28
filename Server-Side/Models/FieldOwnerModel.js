const DB_Connection = require("../DB_Connection");
var FieldOwnerSchema = {
    fullName:{type:String,pattern:"^[a-zA-Z\s]*$"},
    phone:{type:String,pattern:"^01[0125][0-9]{8}$"},
    userName:{type:String,pattern:"^[a-zA-Z0-9]+$", required:true},
    password:{type:String,minlength:5, required:true}
}
var FieldOwner = DB_Connection.model("FieldOwners",FieldOwnerSchema);
module.exports = FieldOwner;
