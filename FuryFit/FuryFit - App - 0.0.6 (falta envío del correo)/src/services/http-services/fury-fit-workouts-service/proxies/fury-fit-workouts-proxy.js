(function () {
    'use strict';

    angular
        .module('ffapp')
        .factory('furyFitWorkoutProxy', furyFitWorkoutProxy);

        furyFitWorkoutProxy.$inject = ['$q', '$http'];

    function furyFitWorkoutProxy($q, $http) {
        var workoutsServiceURL = 'http://localhost:8080/api/furyfitproject/workouts';

        return {
            getWorkoutsFromProxy: getWorkoutsFromProxy
        };

        function getWorkoutsFromProxy() {
            return $http.get(workoutsServiceURL).then(sendWorkoutsToService, sendErrorInWToService);

            function sendWorkoutsToService(response) { //OK
                return response.data;
            }

            function sendErrorInWToService(error) { //KO
                return $q.reject(error);
            }
        }
    }
})();