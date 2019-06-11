(function () {
    'use strict';

    angular
        .module('ffapp')
        .component('faqsPage', {
            templateUrl: 'src/components/app-container/components/fury-fit-dynamic-body/components/fury-fit-faqspage/assets/fury-fit-faqspage-template.html',
            controller: 'faqsController',
            controllerAs: 'faqsCtrl',
            bindings: {
                faqList: '<'
            }
        });
})();