"use strict";

var app = angular.module("personalSite");

app.controller("mainController", function ($scope, EssayServices, $state) {
    
});

app.controller("essaysController", function ($scope, EssayServices, $state, $sce) {
   /* let pages = [];

    const producePages = function () {
        if ($scope.olderPosts && pages.length) {
            $scope.currentPages = pages.slice(4);
        } else if (!$scope.olderPosts && pages.length) {
            $scope.currentPages = pages.slice(0, 4);
        }
    };

    $scope.toggleOlderPosts = function (boolean) {
        if (boolean) {
            $scope.olderPosts = false;
            producePages();
        }
        if (!boolean) {
            $scope.olderPosts = true;
            producePages();
        }
    };*/

    EssayServices.getAllEssays()
        .then(function (response) {
            $scope.pages = EssayServices.sortPages(response.data).slice(1);
            $scope.firstPage = response.data[0];
            console.log("Check: ", $scope.pages);
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });

    if ($state.params.pieceId) {
        let toFind = { url: $state.params.pieceId };
        EssayServices.getSingleEssay(toFind)
            .then(function (response) {
                $scope.currentPiece = response.data[0];
                $scope.currentUrl = `www.windupdrub.com/#!/writing/${$scope.currentPiece.url}`;
            })
            .catch(function (error) {
                console.log("Error: ", error);
            });
    }
    $scope.toTrustedHTML = function (html) {
        return $sce.trustAsHtml(html);
    }

});


