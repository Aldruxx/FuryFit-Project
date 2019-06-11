(function () {
    'use strict';

    angular
        .module('ffapp')
        .factory('furyFitInterestLinksService', furyFitInterestLinksService);

    furyFitInterestLinksService.$inject = ['$q', 'furyFitInterestLinksProxy'];

    function furyFitInterestLinksService($q, furyFitInterestLinksProxy) {
        var defer;

        return {
            getInterestingLinks: getInterestingLinks
        };

        function getInterestingLinks() {
            defer = $q.defer();

            furyFitInterestLinksProxy.getLinksFromProxy().then(paintLinks, sendErrorBck);

            return defer.promise;

            function paintLinks(data) {
                defer.resolve(data);
            }

            function sendErrorBck(error) {
                defer.reject(error);
            }
        }
    }
})();