pocpro.controller('ProfileViewerController',['$scope','vcard',function($scope,vcard){
	$scope.vc = {};
	$scope.newName = $scope.vc.noOfTabs;
	$scope.$watch('vcard', function() {
    	$scope.vc = vcard;
	});
}]);