const DB_Connection = require("../DB_Connection");
var AdminSchema = {

}
var Admin = DB_Connection.model("Admin",AdminSchema);
module.exports = Admin;
