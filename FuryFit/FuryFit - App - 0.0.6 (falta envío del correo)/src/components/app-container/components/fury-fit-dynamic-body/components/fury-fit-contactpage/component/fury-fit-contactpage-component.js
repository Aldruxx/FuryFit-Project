(function () {
    'use strict';

    angular
        .module('ffapp')
        .component('contactPage', {
            templateUrl: 'src/components/app-container/components/fury-fit-dynamic-body/components/fury-fit-contactpage/assets/fury-fit-contactpage-template.html',
            controller: 'contactPageController',
            controllerAs: 'contactCtrl'
        });
})();