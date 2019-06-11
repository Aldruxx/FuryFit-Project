(function () {
    'use strict';

    angular
        .module('ffapp')
        .component('workoutsPage', {
            templateUrl: 'src/components/app-container/components/fury-fit-dynamic-body/components/fury-fit-workoutspage/assets/fury-fit-workoutspage-template.html',
            controller: 'workoutsPageController',
            controllerAs: 'workoutsCtrl',
            bindings: {
                workoutList: '<'
            }
        });
})();