"use strict";

var app = angular.module("personalSite");

app.controller("mainController", function ($scope, EssayServices, $state) {
    

});

app.controller("essaysController", function ($scope, EssayServices, $state, $sce) {

    console.log("Essays");
    
    EssayServices.getAllEssays()
        .then(function (response) {
            $scope.essayList = response.data;
            $scope.essayList.sort(function (a, b) {
                return parseInt(b.essayNumber) - parseInt(a.essayNumber)
            });

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


