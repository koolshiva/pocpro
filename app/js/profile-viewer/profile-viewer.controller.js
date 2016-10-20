pocpro.controller('ProfileViewerController',['$scope','vcard',function($scope,vcard){
	//$scope.vc = vcard.getVCard();
	$scope.newName = '';
	 $scope.success   = false;
             $scope.error       = false;
             if(vcard.getCardObj()==null || vcard.getCardObj() ==''){
             	      var askForPromise = vcard.getPromise();
	askForPromise.then(
        // OnSuccess function
        function(answer) {
          $scope.newName = answer.data.data.noOfTabs;
          //$scope.success = true;
        },
        // OnFailure function
        function(reason) {
          $scope.somethingWrong = reason.data;
          //$scope.error = true;
        }
      )
             }else {
		$scope.newName = vcard.getCardObj();
	}
 

}]);