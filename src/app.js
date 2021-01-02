const express=require('express');
const path = require('path');
let app = express();

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));


app.listen(3000,() =>{
    console.log("--------------------------------------------------------------------------------------");
    console.log("-------------------------------SERVIDOR FUNCIONANDO-----------------------------------");
    console.log("--------------------------------------------------------------------------------------");

});



app.get("/", (req, res)=> res.sendFile(path.join(__dirname, "./views/home.html")));

