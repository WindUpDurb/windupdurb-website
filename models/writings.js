"use strict";

let mongoose = require("mongoose");

let EssayCollection = require("./each-essay");

let essaySchema = new mongoose.Schema({
    essayNumber: { type: String },
    introduction: { type: String },
    title: { type: String, required: true },
    datePosted: { type: String, required: true },
    //text body will be an array of paragraphs
    textBody: [{
        contentType: String,
        content: String
    }],
    url: { type: String }
});

let Essay = mongoose.model("Essay", essaySchema);

// console.log("Essays: ", EssayCollection);

/*EssayCollection.forEach(function (essay) {
    Essay.create(essay, function (error, savedDocument) {
        if (error) return console.log(error);
        console.log("saved doc: ", savedDocument);
    });
});*/

/*Essay.create(firstEssay, function (error, savedDocument) {
    if (error) return console.log(error);
    console.log("saved doc: ", savedDocument);
});*/



module.exports = Essay;