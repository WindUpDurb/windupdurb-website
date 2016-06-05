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

//life.js:

/*

var write = function () {

};

var beer = []

while (alive) {
    if (day === dayOfWeek[4] || dayOfWeek[5]) {
        if (!work) {
            drink(beer);
        } else {
            write(function (noMoreWorkPlease, workDone) {
                if (noMoreWorkPlease) return drinkBeer();
                console.log(workDone);
                drinkBeer();
            });
        }
    } else {
        write();
        read();
    }
}*/




//have it look as if what is being typed is a command from the command line:
//
//david@WindUpDurb-Ubuntu:~$ node life.js
/*

$(document).ready(function () {
    $("#typedAnimation").typed({
        strings : ["david@WindUpDurb-Ubuntu:~$ node life.js <br> david@WindUpDurb-Ubuntu:~$ "]
    })

});
*/


$(function() {
    var data = [
        {
            action: 'type',
            strings: ["david@WindUpDurb-Ubuntu:~$ gedit life.js"],
            output: '',
            postDelay: 1000
        },
        {
            action: 'type',
            //clear: true,
            strings: [''],
            output: $('.mimik-run-output').html()
        },
        {
            action: 'type',
            strings: ["david@WindUpDurb-Ubuntu:~$ node life.js"],
            output: ' ',
            postDelay: 1000
        }


    ];
    runScripts(data, 0);
});

function runScripts(data, pos) {
    var prompt = $('.prompt'),
        script = data[pos];
    if(script.clear === true) {
        $('.history').html('');
    }
    switch(script.action) {
        case 'type':
            // cleanup for next execution
            prompt.removeData();
            $('.typed-cursor').text('');
            prompt.typed({
                strings: script.strings,
                typeSpeed: 30,
                callback: function() {
                    var history = $('.history').html();
                    history = history ? [history] : [];
                    history.push('$ ' + prompt.text());
                    if(script.output) {
                        history.push(script.output);
                        prompt.html('');
                        $('.history').html(history.join('<br>'));
                    }
                    // scroll to bottom of screen
                    $('section.terminal').scrollTop(400);
                    // Run next script
                    pos++;
                    if(pos < data.length) {
                        setTimeout(function() {
                            runScripts(data, pos);
                        }, script.postDelay || 1000);
                    }
                }
            });
            break;
        case 'view':

            break;
    }
}

"use strict";

var app = angular.module("personalSite");

app.controller("mainController", function ($scope, EssayServices, $state) {
    

});

app.controller("essaysController", function ($scope, EssayServices, $state) {

    console.log("Essays");
    
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
                $scope.currentUrl = `www.windupdrub.com/#!/writing/${$scope.currentPiece.url}`;

            })
            .catch(function (error) {
                console.log("Error: ", error);
            });
    }

});



"use strict";

var app = angular.module("personalSite");

app.service("EssayServices", function ($http) {

    this.getAllEssays = function () {
        return $http.get("/api/essays");
    };

    this.getSingleEssay = function (essayToFind) {
        return $http.put("/api/essays/getSingleEssay", essayToFind);
    };
});