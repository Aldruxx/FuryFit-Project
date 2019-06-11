(function () {
    'use strict';

    angular
        .module('ffapp')
        .factory('furyFitInterestLinksProxy', furyFitInterestLinksProxy);

    furyFitInterestLinksProxy.$inject = ['$q', '$http'];

    function furyFitInterestLinksProxy($q, $http) {
        var myserviceURL = 'http://localhost:8080/api/furyfitproject/interestlinks';

        return {
            getLinksFromProxy: getLinksFromProxy
        };

        function getLinksFromProxy() {
            return $http.get(myserviceURL).then(sendLinksRecieved, sendErrorToService);

            function sendLinksRecieved(response) { //OK
                return response.data;
            }

            function sendErrorToService(error) { //KO
                return $q.reject(error);
            }
        }
    }
})();