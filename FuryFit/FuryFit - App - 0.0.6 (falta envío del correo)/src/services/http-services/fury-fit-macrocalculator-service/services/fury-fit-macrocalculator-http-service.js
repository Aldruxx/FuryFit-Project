(function () {
    'use strict';

    angular
        .module('ffapp')
        .factory('furyFitMacroCalculatorService', furyFitMacroCalculatorService);

        furyFitMacroCalculatorService.$inject = ['$q', 'furyFitMacroCalculatorProxy'];

    function furyFitMacroCalculatorService($q, furyFitMacroCalculatorProxy) {
        var defer;

        return {
            getMacrosFromAPI: getMacrosFromAPI
        };

        function getMacrosFromAPI(constructedURL) {
            defer = $q.defer();

            furyFitMacroCalculatorProxy.getMacrosCalculated(constructedURL).then(paintMacros, sendErrorBck);

            return defer.promise;

            function paintMacros(data) {
                defer.resolve(data);
            }

            function sendErrorBck(error) {
                defer.reject(error);
            }
        }
    }
})();