"use strict";

var app = angular.module("personalSite");

app.service("EssayServices", function ($http) {

    this.getAllEssays = function () {
        return $http.get("/api/essays");
    };

    this.getSingleEssay = function (essayToFind) {
        return $http.put("/api/essays/getSingleEssay", essayToFind);
    };

    this.sortPages = function (essayList) {
        return essayList.sort(function (a, b) {
            return parseInt(b.essayNumber) - parseInt(a.essayNumber)
        });
    };
    
});