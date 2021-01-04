const express=require('express');
const path = require('path');
let app = express();

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));


app.listen(process.env.PORT || 3000,() =>{
    console.log("--------------------------------------------------------------------------------------");
    console.log("-------------------------------SERVIDOR FUNCIONANDO-----------------------------------");
    console.log("--------------------------------------------------------------------------------------");

});


//HOME
app.get("/", (req, res)=> res.sendFile(path.join(__dirname, "./views/home.html")));

//REGISTRARSE
app.get("/register", (req, res)=> res.sendFile(path.join(__dirname, "./views/register.html")));

//LOGUEARSE
app.get("/login", (req, res)=> res.sendFile(path.join(__dirname, "./views/login.html")));

