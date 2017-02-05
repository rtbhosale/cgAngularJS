angular.module('n').controller('HomeCtrl',function($scope,$state,$rootScope,$http,$sce){
	$rootScope.currentState = $state.current.name;

	$scope.title = 'AngularJS';
	$scope.desc = 'Angular allows your application to have an expanded HTML library. Learn to add behavior to your HTML and speed up your application’s responsiveness.';

	$http.get("https://baconipsum.com/api/?type=meat-and-filler&paras=6&format=html").then(function(response){
		$scope.bodyContent = $sce.trustAsHtml(response.data);
	});

	$http.get("https://randomuser.me/api/?results=5").then(function(response){
		$scope.testimonialUsers = response.data;
	});

	$http.get("https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1").then(function(response){
		$scope.testimonialContent = response.data;
		$scope.testimonialContent = $scope.testimonialContent[0].split(".").map(s => s.trim());
	});

});