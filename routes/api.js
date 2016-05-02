"use strict";

var express = require("express");
var router = express.Router();
var pathToIndexHTML = "/home/david/Personal_Projects/Website/views/index.html";

router.route("/")
    .get(function (request, response) {
        response.sendFile(pathToIndexHTML);
    });

module.exports = router;