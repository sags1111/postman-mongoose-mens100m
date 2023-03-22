const express = require("express");
const app = express();
const port = 8000 || process.env.require;
require('../db/connection');
const menModule = require('../models/mens');
app.get("/", (req, res) => {
    res.send("app declare");
});

//  add some input data
app.post("/mens", async(req, res) => {
    try {
        const addData = new MensData(req.body);
        console.log(req.body);
        addData.save();
    } catch (e) {
        res.send(e);
    }
});

// use it
app.use(express.json());
app.listen(port, (e) => {
    console.log(`${port} connection established!!`);
});