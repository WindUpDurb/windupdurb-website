"use strict";

var app = angular.module("personalSite");

app.controller("mainController", function ($scope, EssayServices, $state) {
    
});

app.controller("essaysController", function ($scope, EssayServices, $state, $sce) {
    let pages;
    $scope.currentPage = 0;
    $scope.firstPage = true;
    $scope.lastPage = false;
    $scope.nextPage = function () {
        console.log("Here");
        console.log($scope.currentPage);
        $scope.currentPage++;
    };
    $scope.previousPage = function() {
        console.log("Here");
        $scope.currentPage--;
    };
  /*  $scope.nextPage = function () {
        if (which === "next") {
            currentPage++;
        } else {
            currentPage--;
        }
        $scope.currentPage = pages[currentPage];
        if(currentPage === 0) {
            $scope.firstPage = true;
            $scope.lastPage = false;
        } else if (currentPage === pages.length) {
            $scope.firstPage = false;
            $scope.lastPage = true;
        } else {
            $scope.firstPage = false;
            $scope.lastPage = false;
        }
    };*/

    EssayServices.getAllEssays()
        .then(function (response) {
            pages = EssayServices.paginate(response.data);
            $scope.currentPage = pages[$scope.currentPage];
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


