(function () {
    'use strict';

    angular
        .module('ffapp')
        .factory('furyFitFaqsProxy', furyFitFaqsProxy);

        furyFitFaqsProxy.$inject = ['$q', '$http'];

    function furyFitFaqsProxy($q, $http) {
        var myserviceURL = 'http://localhost:8080/api/furyfitproject/faqs';

        return {
            getFAQSFromProxy: getFAQSFromProxy
        };

        function getFAQSFromProxy() {
            return $http.get(myserviceURL).then(sendFaqsRecieved, sendErrorToService);

            function sendFaqsRecieved(response) { //OK
                return response.data;
            }

            function sendErrorToService(error) { //KO
                return $q.reject(error);
            }
        }
    }
})();