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
                    controller: "mainController"
                }
            }
        })
        .state("contact", {
            url: "/contact",
            views: {
                "body": {
                    controller : "mainController",
                    templateUrl : "/html/contact.html"
                }
            }
        })
        .state("writing", {
            url: "/writing",
            views: {
                "body": {
                    controller: "essaysController",
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
                    controller: "essaysController"
                }
            }
        })
        .state("about", {
            url: "/about",
            views: {
                "body": {
                    controller: "mainController",
                    templateUrl: "/html/about.html"
                }
            }
        });


    $urlRouterProvider.otherwise("/");
});