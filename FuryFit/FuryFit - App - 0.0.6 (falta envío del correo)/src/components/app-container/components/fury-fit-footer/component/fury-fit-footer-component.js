(function () {
    'use strict';

    angular
        .module('ffapp')
        .component('ffFooter', {
            templateUrl: 'src/components/app-container/components/fury-fit-footer/assets/fury-fit-footer-template.html',
            controller: 'footerController',
            controllerAs: 'footerCtrl'
        });
})();