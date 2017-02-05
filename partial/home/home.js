angular.module('n').controller('HomeCtrl',function($scope,$state,$rootScope,$http,$sce){
	$rootScope.currentState = $state.current.name;

	$scope.title = 'AngularJS';
	$scope.desc = 'Angular allows your application to have an expanded HTML library. Learn to add behavior to your HTML and speed up your application’s responsiveness.';

	$http.get("https://baconipsum.com/api/?type=meat-and-filler&paras=6&format=html").then(function(response){
		$scope.bodyContent = $sce.trustAsHtml(response.data);
	});
});