/**
 * 1-npm i express
 * 2-npm i body-parser
 * 3-npm i path
 */

const express = require("express");
const app = express();
const PORT = process.env.PORT || 7500
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

//#region For courses [CRUD] [Creat-Read-Update-Delete]
const CourseRoutes = require("./Routes/CourseRoutes");
app.use("/api/courses",CourseRoutes);
//#endregion

//#region For players [CRUD] [Creat-Read-Update-Delete]
const playerRoutes = require("./Routes/PlayerRoutes");
app.use("/api/players",playerRoutes);
//#endregion

//#region For fieldOwners [CRUD] [Creat-Read-Update-Delete]
const fieldOwnerRoutes = require("./Routes/FieldOwnerRoutes");
app.use("/api/fieldOwners",fieldOwnerRoutes);
//#endregion

//#region For fields [CRUD] [Creat-Read-Update-Delete]
const fieldRoutes = require("./Routes/FieldRoutes");
app.use("/api/fields",fieldRoutes);
//#endregion

//#region For games [CRUD] [Creat-Read-Update-Delete]
const gameRoutes = require("./Routes/GameRoutes");
app.use("/api/games",gameRoutes);
//#endregion

//#region For admins [CRUD] [Creat-Read-Update-Delete]
const adminRoutes = require("./Routes/AdminRoutes");
app.use("/api/admins",adminRoutes);
//#endregion

//#region For admins [CRUD] [Creat-Read-Update-Delete]
const authRoutes = require("./Routes/auth");
app.use("/api/login",authRoutes);
//#endregion

app.listen(PORT, ()=>{console.log("http://localhost:"+PORT)})


//#region player service

// async UpdatePlayer(id){
//     if(await Player.updateOne({_id:id}, {fullName: this.fullName, phone: this.phone, birthDate: this.birthDate, location: this.location, email: this.email, userName: this.userName, password: this.password})){
//         return true;
//     }else{
//         return false;
//     }
// } 

//#region playercontroller

// var UpdatePlayer = async (req, res)=>{
//     var HashedPassword = await bcrypt.hash(req.body.password,10);
//     var updatedPlayer = new PlayerServices(req.body.fullName, req.body.phone, req.body.birthDate, req.body.location, req.body.email, req.body.userName, HashedPassword);
//     if(PlayerValidate(updatedPlayer)){
//         if(updatedPlayer.UpdatePlayer(req.params.id)){
//             res.status(200).send("Updated Successfully !");
//         }else{
//             res.status(400).send("Not Updated !");
//         }
//     }else{
//         res.status(400).send("Validation Not Added !");
//     }
// };