const Game = require("../Models/GameModel");
class GameServices{
    constructor(){
        
    }
    static async GetAllGames(){
        return await Game.find({});
    }
    static async GetGameByID(id){
        return await Game.findById(id);;
    }
    async AddGame(){
        var newGame = new Game({});
        return await newGame.save();
    }
    async UpdateGame(id){
        return await Game.updateOne({_id:id}, {});
    }
    static async DeleteGame(id){
        return await Game.deleteOne({ _id:id});
    }
}
module.exports = GameServices;