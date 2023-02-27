const DB_Connection = require("../DB_Connection");
var GameSchema = {

}
var Game = DB_Connection.model("Games",GameSchema);
module.exports = Game;
