"use strict";

var app = angular.module("personalSite");

app.controller("mainController", function ($scope, EssayServices, $state) {

    if ($state.current.name === "writing" || "writtenPiece") {

        EssayServices.getAllEssays()
            .then(function (response) {
                $scope.essayList = response.data;
                console.log($scope.essayList);

            })
            .catch(function (error) {
                console.log("Error: ", error);
            });


        if ($state.params.pieceId) {
            let toFind = { url: $state.params.pieceId };
            EssayServices.getSingleEssay(toFind)
                .then(function (response) {
                    $scope.currentPiece = response.data[0];
                })
                .catch(function (error) {
                    console.log("Error: ", error);
                });
        }
    }
    //end writing states

});
