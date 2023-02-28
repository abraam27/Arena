const PlayerValidate = require("../Utils/PlayerValidation");
const AuthValidation = require("../Utils/AuthValidation");
const PlayerServices = require("../Services/PlayerServices");
const bcrypt= require("bcrypt");

const Ajv = require("ajv");
var ajv = new Ajv();
var PlayerLogin = async (req, res)=>{
    var userData = req.body;
    if(AuthValidation(userData)){
        const token = await PlayerServices.LoginUser(userData)
        if(token){
            res.header("X-Auth-Token", token)
            res.status(200).send("Logged in successfully");
        }else{
            res.status(400).send("Not Logged in");
        }
    }else{
        res.status(400).send("Not Valid !");
    }
}
var GetAllPlayers = async (req, res)=>{
    res.status(200).json(await PlayerServices.GetAllPlayers());
};
var GetPlayerByID = async (req, res)=>{
    res.status(200).json(await PlayerServices.GetPlayerByID(req.params.id));
};
var AddNewPlayer = async (req, res)=>{
    var HashedPassword = await bcrypt.hash(req.body.password,10);
    var newPlayer = new PlayerServices(req.body.fullName, req.body.phone, req.body.birthDate, req.body.location, req.body.email, req.body.userName, HashedPassword,"player");
    var newplayerr = {...newPlayer, password:req.body.password};
    if(PlayerValidate(newplayerr)){
        if(await newPlayer.AddPlayer()){
            res.status(201).send("Add Successfully !");
        }else{
            res.status(400).send("Not Added !");
        }
    }else{
        res.status(400).send("Validation Not Added !");
        console.log(PlayerValidate.errors);
    }
};
var UpdatePlayer = async (req, res)=>{
    var HashedPassword = await bcrypt.hash(req.body.password,10);
    var updatedPlayer = new PlayerServices(req.body.fullName, req.body.phone, req.body.birthDate, req.body.location, req.body.email, req.body.userName, HashedPassword);
    if(PlayerValidate(updatedPlayer)){
        if(updatedPlayer.UpdatePlayer(req.body._id)){
            res.status(200).send("Updated Successfully !");
        }else{
            res.status(400).send("Not Updated !");
        }
    }else{
        res.status(400).send("Validation Not Added !");
    }
};
var DeletePlayer = async (req, res)=>{
    if(PlayerServices.DeletePlayer(req.params.id)){
        res.status(201).send("Deleted Successfully !");
    }else{
        res.status(400).send("Not Deleted !");
    }
};
var GetAllGames = async (req, res)=>{
    let games =await PlayerServices.GetAllGames(req.params.id)
    if(games){
        res.status(201).json(games);
    }else{
        res.status(400).send("there is no games !");
    }
};
var GetGame = async (req, res)=>{
    let games =await PlayerServices.GetGame(req.params.id,req.params.gameId)
    if(games){
        res.status(201).json(games);
    }else{
        res.status(400).send("there is no games !");
    }
};


module.exports = {
    GetAllPlayers,
    GetPlayerByID,
    AddNewPlayer,
    UpdatePlayer,
    DeletePlayer,
    PlayerLogin,
    GetAllGames,
    GetGame
};