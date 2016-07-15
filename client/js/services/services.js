"use strict";

var app = angular.module("personalSite");

app.service("EssayServices", function ($http) {

    this.getAllEssays = function () {
        return $http.get("/api/essays");
    };

    this.getSingleEssay = function (essayToFind) {
        return $http.put("/api/essays/getSingleEssay", essayToFind);
    };

    this.paginate = function (essayList) {
        let sorted = essayList.sort(function (a, b) {
            return parseInt(b.essayNumber) - parseInt(a.essayNumber)
        });
        let pages = [];
        let page = [];
        for (let i = 0; i < sorted.length; i++) {
            page.push(sorted[i]);
            if (page.length === 4) {
                pages.push([...page]);
                page = [];
            }
            if(i === sorted.length - 1) {
                pages.push([...page]);
            }
        }
        return pages;
    };
    
});