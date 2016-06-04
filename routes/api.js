"use strict";

var express = require("express");
var router = express.Router();

router.use("/essays", require("./essays"));

module.exports = router;