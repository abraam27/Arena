const Game = require("../Models/GameModel");
class GameServices{
    constructor(playerId,fieldId,date,hour,rate,complain,comment){
        this.playerId=playerId;
        this.fieldId=fieldId;
        this.date=date;
        this.hour=hour;
        this.rate=rate;
        this.complain=complain;
        this.comment=comment;
    }
    static async GetAllGames(){
        return await Game.find({});
    }
    static async GetGameByID(id){
        return await Game.findById(id);;
    }
    async AddGame(){
        var newGame = new Game ({playerId:this.playerId,fieldId:this.fieldId,date:this.date,hour:this.hour,rate:this.rate,complain:this.complain,comment:this.comment });
        // let foundUser = await Field.find({fieldName:newField.fieldName}).exec();//null
        
            await newGame.save();
            return true;
        
    }
    async UpdateGame(id){
        return await Game.updateOne({_id:id}, {});
    }
    static async DeleteGame(id){
        return await Game.deleteOne({ _id:id});
    }
}
module.exports = GameServices;