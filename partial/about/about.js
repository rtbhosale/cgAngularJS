angular.module('n').controller('AboutCtrl',function($scope,$state,$rootScope,$http,$sce){
	$rootScope.currentState = $state.current.name;

	$http.get("https://randomuser.me/api").then(function(response){
		$scope.userData = response.data;
	});

	$http.get("https://baconipsum.com/api/?type=meat-and-filler&paras=3&format=html").then(function(response){
		$scope.userBio = $sce.trustAsHtml(response.data);
	});

	$http.get("https://randomuser.me/api").then(function(response){
		$scope.userOne = response.data;
	});

	$http.get("https://randomuser.me/api").then(function(response){
		$scope.userTwo = response.data;
	});

	$http.get("https://randomuser.me/api").then(function(response){
		$scope.userThree = response.data;
	});
});