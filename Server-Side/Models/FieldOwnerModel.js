const DB_Connection = require("../DB_Connection");
var FieldOwnerSchema = {

}
var FieldOwner = DB_Connection.model("FieldOwners",FieldOwnerSchema);
module.exports = FieldOwner;
