"use strict";

var app = angular.module("personalSite");

app.controller("mainController", function ($scope, EssayServices, $state) {
    
});

app.controller("essaysController", function ($scope, EssayServices, $state, $sce) {
    let pages;
    let currentPage = 0;
    $scope.firstPage = true;
    $scope.lastPage = false;
    $scope.leafThroughPages = function (which) {
        if (which === "next") {
            currentPage++;
        } else {
            currentPage--;
        }
        $scope.currentPage = pages[currentPage];
        if(page === 0) {
            $scope.firstPage = true;
            $scope.lastPage = false;
        } else if (page === pages.length) {
            $scope.firstPage = false;
            $scope.lastPage = true;
        } else {
            $scope.firstPage = false;
            $scope.lastPage = false;
        }
    };

    EssayServices.getAllEssays()
        .then(function (response) {
            pages = EssayServices.paginate(response.data);
            $scope.currentPage = pages[0];
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


