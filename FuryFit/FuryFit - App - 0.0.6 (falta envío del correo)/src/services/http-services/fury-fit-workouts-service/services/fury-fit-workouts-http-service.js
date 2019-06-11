(function () {
    'use strict';

    angular
        .module('ffapp')
        .factory('furyFitWorkoutService', furyFitWorkoutService);

        furyFitWorkoutService.$inject = ['$q', 'furyFitWorkoutProxy'];

    function furyFitWorkoutService($q, furyFitWorkoutProxy) {
        var defer;

        return {
            getWorkouts: getWorkouts
        };

        function getWorkouts() {
            defer = $q.defer();

            furyFitWorkoutProxy.getWorkoutsFromProxy().then(paintWorkouts, sendErrorBck);

            return defer.promise;

            function paintWorkouts(data) {
                defer.resolve(data);
            }

            function sendErrorBck(error) {
                defer.reject(error);
            }
        }
    }
})();