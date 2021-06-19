const express = require("express");
const router = express.Router();

const controller = require('../../models/controllers');

// router.post("/api/save-call-id", controller.saveCallId);
router.post("/api/save-call-id", async (req, res) => {
    try {

    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});


router.post("/api/get-call-id/:id", controller.getCallId);

module.exports = router;