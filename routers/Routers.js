const express = require("express");
const router = express.Router();
const path = require("path");

router.get(["/", "/home"], (req, res) => {
    return res.send("Hello Home")
})

router.get("/about", (req, res) => {
    return res.send("Hello About")
})

router.get("/contact", (req, res) => {
    return res.send("Hello contact")
})

router.get("/product/:id", (req, res) => {
    return res.send(`Hello from Product${req.params.id}`)
})




module.exports = router;