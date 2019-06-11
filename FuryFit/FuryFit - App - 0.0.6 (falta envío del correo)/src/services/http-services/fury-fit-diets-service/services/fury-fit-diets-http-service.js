(function () {
    'use strict';

    angular
        .module('ffapp')
        .factory('furyFitDietService', furyFitDietService);

    furyFitDietService.$inject = ['$q', 'furyFitDietProxy'];

    function furyFitDietService($q, furyFitDietProxy) {
        var defer;

        return {
            getDiets: getDiets
        };

        function getDiets() {
            defer = $q.defer();

            furyFitDietProxy.getDietsFromProxy().then(paintDiets, sendBackError);

            return defer.promise;

            function paintDiets(data) {
                defer.resolve(data);
            }

            function sendBackError(error) {
                defer.reject(error);
            }
        }
    }
})();