(function () {
    'use strict';

    angular
        .module('ffapp')
        .component('homePage', {
            templateUrl: 'src/components/app-container/components/fury-fit-dynamic-body/components/fury-fit-homepage/assets/fury-fit-homepage-template.html',
            controller: 'homePageController',
            controllerAs: 'homeCtrl',
            bindings: {
                flagList: '='
            }
        });
})();