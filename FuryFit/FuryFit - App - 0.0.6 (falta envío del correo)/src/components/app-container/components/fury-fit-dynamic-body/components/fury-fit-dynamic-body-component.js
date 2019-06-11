(function () {
    'use strict';

    angular
        .module('ffapp')
        .component('ffDynbody', {
            templateUrl: 'src/components/app-container/components/fury-fit-dynamic-body/assets/fury-fit-dynamic-body-template.html',
            controller: 'dynamicBodyController',
            controllerAs: 'dynBController',
            bindings: {
                meFlags: '=',
                dietPackg: '<',
                workoutsPackg: '<',
                linksPackage: '<',
                faqsPackag: '<'
            }
        });
})();