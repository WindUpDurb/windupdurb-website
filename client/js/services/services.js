"use strict";

var app = angular.module("personalSite");

app.service("EssayServices", function ($http) {

    this.getAllEssays = function () {
        return $http.get("/api/essays");
    };

    this.getSingleEssay = function (essayToFind) {
        return $http.put("/api/essays/getSingleEssay", essayToFind);
    };
});