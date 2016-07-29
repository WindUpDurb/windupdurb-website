"use strict";

var app = angular.module("personalSite", ["ui.router", "ngDisqus"]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $disqusProvider) {

    $disqusProvider.setShortname("windupdurb");

    $locationProvider.hashPrefix("!");

    $stateProvider
        .state("home", {
            url: "/",
            views: {
                "body": {
                    templateUrl: "/html/home.html",
                    controller: "essaysController"
                }
            }
        })
        .state("writtenPiece", {
            url: "/writing/:pieceId",
            views: {
                "body" : {
                    templateUrl: "/html/writing.writtenPiece.html",
                    controller: "essaysController"
                }
            }
        })
        .state("about", {
            url: "/about",
            views: {
                "body": {
                    controller: "essaysController",
                    templateUrl: "/html/about.html"
                }
            }
        });


    $urlRouterProvider.otherwise("/");
});

