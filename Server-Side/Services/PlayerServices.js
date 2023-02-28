const Player = require("../Models/PlayerModel");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken")
class PlayerServices{
    constructor(fullName,phone,birthDate,location,email,userName,password){
        this.fullName = fullName;
        this.phone = phone;
        this.birthDate = birthDate;
        this.location = location;
        this.email = email;
        this.userName = userName;
        this.password = password;
    }
    static async LoginUser(userData){
        var foundUser;
        if(userData.userName){
            foundUser = await Player.findOne({userName:userData.userName}).exec();
            if(foundUser){
                if(await bcrypt.compare(userData.password, foundUser.password)){
                    console.log("-- Done -- username is true & password is true");
                    const token = jwt.sign({userID:foundUser._id, fullName:foundUser.fullName, phone:foundUser.phone, birthDate:foundUser.birthDate, location:foundUser.location, email:foundUser.email, userName:foundUser.userName},"Messi"); 
                    return token;
                }else{
                    console.log(" -- Unfortunately -- username is true but password is false");
                    return false;
    
                }
            }else{
                console.log("username false");
                return false;
            }
        }else if(userData.email){
            foundUser = await Player.findOne({email:userData.email}).exec();
            if(foundUser){
                if(await bcrypt.compare(userData.password, foundUser.password)){
                    console.log("-- Done -- email is true & password is true");
                    const token = jwt.sign({userID:foundUser._id, fullName:foundUser.fullName, phone:foundUser.phone, birthDate:foundUser.birthDate, location:foundUser.location, email:foundUser.email, userName:foundUser.userName},"messi")   
                    return token;
                }else{
                    console.log("-- Unfortunately --  email is true but password is false");
                    return false;
    
                }
            }else{
                console.log("email false");
                return false;
            }
        }else{
            return false;
        }
    }
    static async GetAllPlayers(){
        return await Player.find({});
    }
    static async GetPlayerByID(id){
        return await Player.findById(id);
    }
    async AddPlayer(){
        var newPlayer = new Player({ fullName: this.fullName, phone: this.phone, birthDate: this.birthDate, location: this.location, email: this.email, userName: this.userName, password: this.password});
        let foundPlayer = await Player.find({userName:newPlayer.userName}).exec();//null
        if(foundPlayer.length==0){
            //Please Login
            await newPlayer.save();
            return true;
        }else{
            return false;
           
        }
    }
    async UpdatePlayer(id){
        if(await Player.updateOne({_id:id}, {fullName: this.fullName, phone: this.phone, birthDate: this.birthDate, location: this.location, email: this.email, userName: this.userName, password: this.password})){
            return true;
        }else{
            return false;
        }
    }
    static async DeletePlayer(id){
        return await Player.deleteOne({ _id:id});
    }
}
module.exports = PlayerServices;