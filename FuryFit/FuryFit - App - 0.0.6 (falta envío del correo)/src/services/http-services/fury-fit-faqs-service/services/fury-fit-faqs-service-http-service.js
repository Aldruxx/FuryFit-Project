(function () {
    'use strict';

    angular
        .module('ffapp')
        .factory('furyFitFaqsService', furyFitFaqsService);

        furyFitFaqsService.$inject = ['$q', 'furyFitFaqsProxy'];

    function furyFitFaqsService($q, furyFitFaqsProxy) {
        var defer;

        return {
            getFAQs: getFAQs
        };

        function getFAQs() {
            defer = $q.defer();

            furyFitFaqsProxy.getFAQSFromProxy().then(paintFaqs, sendErrorBck);

            return defer.promise;

            function paintFaqs(data) {
                defer.resolve(data);
            }

            function sendErrorBck(error) {
                defer.reject(error);
            }
        }
    }
})();