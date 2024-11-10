const express = require("express");
const app = express();
const path = require("path");
const Routers = require("./routers/Routers");
const Port = 3000;







app.listen(Port, function (){
    console.log(`server is runing on port${Port}`);
})