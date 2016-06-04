"use strict";

var app = angular.module("personalSite", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("home", {
            url: "/",
            views: {
                "body": {
                    templateUrl: "/html/home.html"
                }
            }
        })
        .state("contact", {
            url: "/contact",
            views: {
                "body": {
                    controller : "contactController",
                    templateUrl : "/html/contact.html"
                }
            }
        })
        .state("writing", {
            url: "/writing",
            views: {
                "body": {
                    controller: "writingController",
                    templateUrl : "/html/writing.directory.html"
                }
            }
        })
        .state("writtenPiece", {
            parent: "writing",
            url: "/:pieceId",
            views: {
                "writtenPiece" : {
                    templateUrl: "/html/writing.writtenPiece.html",
                    controller: "writingController"
                }
            }
        })
        .state("about", {
            url: "/about",
            views: {
                "body": {
                    controller: "aboutController",
                    templateUrl: "/html/about.html"
                }
            }
        });


    $urlRouterProvider.otherwise("/");
});