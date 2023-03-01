const express = require("express");
const router = express.Router();
const { changeLampStatus } = require("../../services/lamp");

router.post("/", async (req, res) => {
    try {
    	console.log("here")
        const result = await changeLampStatus(req.body);
        console.log(result)
        if (result === "NOT OK") return res.status(400);
        return res.status(201).json({ msg: "Successful action" });
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
