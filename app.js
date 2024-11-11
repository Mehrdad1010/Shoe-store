const express = require("express");
const app = express();
const path = require("path");
const Routers = require("./routers/Routers");
const { stringify } = require("querystring");
const Port = 3000;

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", Routers)

app.listen(Port, function () {
    console.log(`server is runing on port${Port}`);
})