pocpro.service('vcard',['$http',function($http){
	var vcard={};
	var self=this;
	$http.get('js/json/profile-data.json').then(function(response) {
        self.vcard = response.data;
      });
	// return {
	//     getNewName: function () {
	//         return newName;
	//     },
	//     setNewName: function (value) {
	//         newName = value;
	//     }
	// };
	return vcard;
}]);