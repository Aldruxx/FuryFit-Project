(function () {
    'use strict';

    angular
        .module('ffapp')
        .factory('furyFitMacroCalculatorProxy', furyFitMacroCalculatorProxy);

    furyFitMacroCalculatorProxy.$inject = ['$q', '$http'];

    function furyFitMacroCalculatorProxy($q, $http) {

        return {
            getMacrosCalculated: getMacrosCalculated
        };

        function getMacrosCalculated(macrocalcURL) { //Must create the URL on the controller with the data
            return $http.get(macrocalcURL).then(sendMacroResult, sendErrorToService);

            function sendMacroResult(response) { //OK
                return response.data;
            }

            function sendErrorToService(error) { //KO
                return $q.reject(error);
            }
        }
    }
})();