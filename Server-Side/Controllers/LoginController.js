const AuthValidation = require("../Utils/AuthValidation");
const LoginService = require("../Services/LoginService");
var UserLogin = async (req, res)=>{
    var userData = req.body;
    if(AuthValidation(userData)){
        const token = await LoginService.LoginUser(userData)
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
module.exports = {UserLogin}