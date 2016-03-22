// Tutorial-1 of Laurea Implementing mobile apps.

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires' thats the part in these brackets [ ].
// This means when our angular app starts it requires the ionic lib to function correctly.
var myApp = angular.module('start', ['ionic'])

myApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
// ABOVE THIS LINE CHANGE NOTHING
/*
    In the repository readme located here https://github.com/LaureaNeonLab/tutorial-1 
    Follow all the instructions inserting the code snippets as instructed.
    Feel free to experiment and go off topic as this is the best way to test and learn.
    The code can always be re-cloned.
    */
myApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
    .state('pOne', {
      url: "/p1",
      templateUrl: "pages/pOne.html",
    })

    .state('pTwo', {
      url: "/p2",
      templateUrl: "pages/pTwo.html",
    })

    .state('pThree', {
      url: "/p3",
      templateUrl: "pages/pThree.html",
    })

    .state('pFour', {
      url: "/p4",
      templateUrl: "pages/pFour.html",
    })

    .state('pFive', {
      url: "/p5",
      templateUrl: "pages/pFive.html",
    })

    .state('home', {
      url: "/home",
      abstract: true,
      templateUrl: "index.html",
    });
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/index.html');
});

