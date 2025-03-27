const express = require("express");
const router = express.Router();    

const database= require("../database/db");
router.get("/", (req, res) => { 
    res.send("Olá, mundo!");
});

module.exports = router;

