const express = require("express");
const router = express.Router();    

const database= require("../database/db");
const { Random } = require("../functions/Random");

router.get("/get/types", async (req, res) => {
    const data = await database.getTypes("en");
    if(data.error) {
        res.status(404).send(data);
    }
    else {
        res.send(data);
    }
});

router.get("/get/random/:type", async (req, res) => {
    const type = req.params.type;
    const data = await database.getData("en", type);
    if(data.error) {
        res.status(404).send(data);
    }
    else {
        const item = Random(data.data.arr);
        res.send(item);
    }
});

module.exports = router;

