pobedaTaxiDriver.factory('CommunicationServerService', function($rootScope, $http, ROUTES) {
    return {
        getAddressByGps: function(lat, lon) {
            return $http.get(ROUTES.API + '/geo/get-by-gps?' + 'access_token=' + $rootScope.userDataTaxiKazan.accessToken + "&lat=" + lat + "&lon=" + lon).success(function(data) {
                if (data.code == 200) {
                    return data;
                } else {
                    alert("Ошибка с кодом: ", data.code);
                }
            }).error(function(error) {
                console.log("$scope.getSMSCode --- error(function(data)", error);
            });
        },
        getGpsByAddress: function(query) {
            return $http.get(ROUTES.API + '/geo/get-by-name?' + 'access_token=' + $rootScope.userDataTaxiKazan.accessToken + "&query=" + query).success(function(data) {
                if (data.code == 200) {
                    return data;
                } else {
                    alert("Ошибка с кодом: ", data.code);
                }
            }).error(function(error) {
                console.log("$scope.getSMSCode --- error(function(data)", error);
            });
        },
    }
});
