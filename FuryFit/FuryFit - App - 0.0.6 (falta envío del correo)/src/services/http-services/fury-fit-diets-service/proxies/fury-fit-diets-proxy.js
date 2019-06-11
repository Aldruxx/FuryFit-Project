(function () {
    'use strict';

    angular
        .module('ffapp')
        .factory('furyFitDietProxy', furyFitDietProxy);

    furyFitDietProxy.$inject = ['$q', '$http'];

    function furyFitDietProxy($q, $http) {
        var myserviceURL = 'http://localhost:8080/api/furyfitproject/diets';

        return {
            getDietsFromProxy: getDietsFromProxy
        };

        function getDietsFromProxy() {
            return $http.get(myserviceURL).then(sendDietsToService, sendErrorToService);

            function sendDietsToService(response) { //OK
                return response.data;
            }

            function sendErrorToService(error) { //KO
                return $q.reject(error);
            }
        }
    }
})();