angular.module('n').controller('ContactCtrl',function($scope,$state,$rootScope){
	$rootScope.currentState = $state.current.name;
	$scope.IsSubmitted = false;

	$scope.sendMail = function(contact){
		$scope.IsSubmitted = true;
		console.log(contact);
	}
});