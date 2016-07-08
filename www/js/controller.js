var app = angular.module('controllers',[]);
app.controller('questionController',function($scope, $stateParams, $state){
	$scope.questions = [
	{
		question:"What is your name?",
		answers:['Ahmed','Saad','Farhan'],
		correctAnswer:2
	},
	{
		question:"How old are you?",
		answers:['22','23','24'],
		correctAnswer:3
	},
	{
		question:"Where do you live?",
		answers:['Karachi','lahore','Islamabad'],
		correctAnswer:1
	},
	{
		question:"How many apps you have developed?",
		answers:['<10','10','>10'],
		correctAnswer:2
	},
	{
		question:"Which car you have?",
		answers:['Chevrolet','Mercedes Benz','Toyota','Tesla'],
		correctAnswer:2
	}

];
	
	$scope.nextRoute = function(){
		if(parseInt($stateParams.questionId) +1 > $scope.questions.length){
			return true;
			console.log("disble");
		}
		else{
			console.log("enable");
			return false;
		}
	}	

	$scope.questionNo = parseInt($stateParams.questionId);
	$scope.question = $scope.questions[parseInt($stateParams.questionId) - 1].question;
	$scope.answers = $scope.questions[parseInt($stateParams.questionId) - 1].answers;
	$scope.totalQuestions = $scope.questions.length;
	$scope.currentRoute = parseInt($stateParams.questionId);

	function answerChoice(){}

});
app.controller('scoreController',function(){});

