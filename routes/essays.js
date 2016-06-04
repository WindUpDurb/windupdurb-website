"use strict";

let express = require("express");
let router = express.Router();

let Essay = require("../models/writings");

router.get("/", function (request, response) {
    Essay.find({}, function (error, essayList) {
        if (error) response.status(400).send(error);
        response.send(essayList);
    });
});

router.put("/getSingleEssay", function (request, response) {
   Essay.find(request.body, function (error, essay) {
       if (error) response.status(400).send(error);
       response.send(essay);
   });
});

module.exports = router;