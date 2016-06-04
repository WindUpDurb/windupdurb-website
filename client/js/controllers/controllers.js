"use strict";

var app = angular.module("personalSite");

app.controller("mainController", function ($scope) {
   console.log("Main Controller");
});

app.controller("contactController", function ($scope) {
   console.log("Contact Controller");
   $scope.currentDirectory = "Contact"
});

app.controller("aboutController", function () {
   console.log("About Controller");
});

app.controller("writingController", function (EssayServices, $state, $scope) {

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



});