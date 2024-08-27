const express = require("express");

const {sendMessage, home} = require("../controllers/index");

const router = express.Router();

router.post("/send-email", sendMessage);

router.get("/", home);


module.exports = router;