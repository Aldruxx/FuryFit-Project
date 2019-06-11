(function () {
    'use strict';

    angular
        .module('ffapp')
        .component('interestingLinksPage', {
            templateUrl: 'src/components/app-container/components/fury-fit-dynamic-body/components/fury-fit-interestinglinks-page/assets/fury-fit-interestinglinks-page-template.html',
            controller: 'interestingLinksController',
            controllerAs: 'ilinksCtrl',
            bindings: {
                intrList: '<'
            }
        });
})();