(function () {
    'use strict';

    angular
        .module('ffapp')
        .component('macroCalculator', {
            templateUrl: 'src/components/app-container/components/fury-fit-dynamic-body/components/fury-fit-macrocalculator-page/assets/fury-fit-macrocalculator-page-template.html',
            controller: 'macrocalculatorController',
            controllerAs: 'macrocalcCtrl',
        });
})();