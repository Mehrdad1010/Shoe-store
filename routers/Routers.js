const express = require("express");
const router = express.Router();
const path = require("path");

router.get(["/", "/home"], (req, res) => {
    return res.render("home")
})

router.get("/about", (req, res) => {
    return res.render("about")
})

router.get("/contact", (req, res) => {
    return res.render("contact")
})

router.get("/product/:id", (req, res) => {
    return res.render(`product`)
})




module.exports = router;