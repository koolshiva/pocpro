angular.module('pocpro').config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/vcard',{
		templateUrl:"js/profile-viewer/profile-viewer.template.html",
		controller:"ProfileViewerController"
	})
	.when('/editcard',{
		templateUrl:"js/profile-editor/profile-editor.template.html",
		controller:"ProfileEditorController"
	})
	.otherwise('/vcard');
}]);

