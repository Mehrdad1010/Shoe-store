const express = require("express");
const router = express.Router();
const path = require("path");
const tools = require("../tools/check")

router.get(["/", "/home"], (req, res) => {
    const data = require("../public/jsons/shoes.json");
    const search_text = decodeURIComponent(req.url.split("=")[1])
    const filter_param = tools.search_json(search_text, data);
    return res.render("home", { data: filter_param })
})

router.get("/about", (req, res) => {
    return res.render("about")
})

router.get("/contact", (req, res) => {
    return res.render("contact")
})

router.get("/product/:id", (req, res) => {
    const data = require("../public/jsons/shoes.json");
    var produc = data.find(x => x.id === Number(req.params.id))
    if (produc) {
        return res.render(`product`, { produc });
    }
})

module.exports = router;