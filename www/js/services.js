var app = angular.module('factories',[]);
app.factory('questionsFactory',function($scope, $http){
	var questions = {};
	$http.get('../data/data.json').success(function(data){

	});
});