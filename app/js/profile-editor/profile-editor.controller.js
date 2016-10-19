pocpro.controller('ProfileEditorController',['$scope','vcard',function($scope,vcard){
	$scope.hisname = "Professor, Oxford University";
	
	//debugger;
	$scope.getText1 = function(param){
		console.log("inside text1 controller");
		alert(param);
		vcard.setNewName(param);
	};
}]);