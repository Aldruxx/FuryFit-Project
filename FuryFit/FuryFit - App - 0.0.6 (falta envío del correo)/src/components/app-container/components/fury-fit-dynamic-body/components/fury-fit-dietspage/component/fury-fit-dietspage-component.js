(function () {
    'use strict';

    angular
        .module('ffapp')
        .component('dietsPage', {
            templateUrl: 'src/components/app-container/components/fury-fit-dynamic-body/components/fury-fit-dietspage/assets/fury-fit-dietspage-template.html',
            controller: 'dietsPageController',
            controllerAs: 'dietsCtrl',
            bindings: {
                dietList: '<'
            }
        });
})();