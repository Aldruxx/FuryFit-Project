(function () {
    'use strict';

    angular
        .module('ffapp')
        .service('furyFitService', furyFitService);

    furyFitService.$inject = ['$q', 'furyFitDietService', 'furyFitWorkoutService', 'furyFitInterestLinksService', 'furyFitFaqsService'];

    function furyFitService($q, furyFitDietService, furyFitWorkoutService, furyFitInterestLinksService, furyFitFaqsService) {
        var self = this;
        var promise;
        var service = {
            getDietsFromDatabase: getDietsFromDatabase,
            getWorkoutsFromDatabase: getWorkoutsFromDatabase,
            getLinksFromDatabase: getLinksFromDatabase,
            getFAQsFromDatabase: getFAQsFromDatabase
        };

        self.defer;

        return service;

        function getDietsFromDatabase() {
            self.defer = self.defer || $q.defer();
            promise = self.defer.promise;

            furyFitDietService.getDiets().then(sendDietsToCtrl, sendErrorToCtrl);

            function sendDietsToCtrl(response) {
                self.defer.resolve(response);
                self.defer = null;
            }

            function sendErrorToCtrl(error) {
                self.defer.reject(error);
                self.defer = null;
            }

            return promise;
        }

        function getWorkoutsFromDatabase() {
            self.defer = self.defer || $q.defer();
            promise = self.defer.promise;

            furyFitWorkoutService.getWorkouts().then(sendWorkoutsToCtrl, sendError);

            function sendWorkoutsToCtrl(response) { //OK
                self.defer.resolve(response);
                self.defer = null;
            }

            function sendError(error) { //KO
                self.defer.reject(error);
                self.defer = null;
            }

            return promise;
        }

        function getLinksFromDatabase() {
            self.defer = self.defer || $q.defer();
            promise = self.defer.promise;

            furyFitInterestLinksService.getInterestingLinks().then(sendLinksToCtrl, sendError);

            function sendLinksToCtrl(response) { //OK
                self.defer.resolve(response);
                self.defer = null;
            }

            function sendError(error) { //KO
                self.defer.reject(error);
                self.defer = null;
            }

            return promise;
        }

        function getFAQsFromDatabase() {
            self.defer = self.defer || $q.defer();
            promise = self.defer.promise;

            furyFitFaqsService.getFAQs().then(sendFAQsToCtrl, sendErrortoMyCtrl);

            function sendFAQsToCtrl(response) { //OK
                self.defer.resolve(response);
                self.defer = null;
            }

            function sendErrortoMyCtrl(error) { //KO
                self.defer.reject(error);
                self.defer = null;
            }

            return promise;
        }
    }
})();