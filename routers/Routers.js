const express = require("express");
const router = express.Router();
const path = require("path");

router.get(["/", "/home"], (req, res) => {
    const data = require("../public/jsons/shoes.json");
    return res.render("home", {data})
})

router.get("/about", (req, res) => {
    return res.render("about")
})

router.get("/contact", (req, res) => {
    return res.render("contact")
})

router.get("/product/:id", (req, res) => {
    const data = require("./jsons/shoes.json");
    var produc = data.find(x=> x.id === Number(req.params.id))
    if (produc){
        return res.render(`product`, produc);
    }
    
})




module.exports = router;