pocpro.service('vcard',['$http','$q',function($http,$q){
	var vcard={};
	var self=this;
	// $http.get('js/json/profile-data.json').then(function(response) {
 //        self.vcard = response.data;
 //      });
	// return {
	//     getVCard: function () {
	//         return vcard;
	//     },
	//     setVCard: function (newVcard) {
	//         newName = newVcard;
	//     }
	// };


	var deferObject,cardObj='',
      myMethods = {
 
        getPromise: function() {
          var promise       =  $http.get('js/json/profile-data.json');
                //deferObject =  deferObject || $q.defer();
 
                // promise.then(
                //   // OnSuccess function
                //   function(answer){
                //     // This code will only run if we have a successful promise.
                //     deferObject.resolve(answer);
                //     cardObj = answer.data.data.noOfTabs;
                //   },
                //   // OnFailure function
                //   function(reason){
                //     // This code will only run if we have a failed promise.
                //     deferObject.reject(reason);
                //   });
 
           return promise;
          },
          getCardObj: function(){
          	if(vcard.getCardObj()==null || vcard.getCardObj() ==''){
          		var promise       =  $http.get('js/json/profile-data.json');
          		return promise;
          	}else{
          		return cardObj;
          	}
          },
          setCardObj: function(param){
          	cardObj = param;
          }
       };
 
       return myMethods;
}]);