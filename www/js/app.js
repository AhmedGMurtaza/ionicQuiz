angular.module('starter', ['ionic',"controllers"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl:"templates/home.html"
    })
    .state('question',{
      url:'/:questionId',
      templateUrl:'templates/question.html',
      controller:'questionController'
    })
    .state('score',{
      url:'/score',
      templateUrl:'templates/score.html',
      controller:'scoreController'
    });

    $urlRouterProvider.otherwise('/');
})
