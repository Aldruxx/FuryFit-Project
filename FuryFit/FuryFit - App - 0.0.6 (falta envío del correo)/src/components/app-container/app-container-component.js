(function() {
    'use strict';

    angular
        .module('ffapp')
        .component('appContainer', {
            templateUrl: 'src/components/app-container/assets/app-container-template.html',
            controller: 'appContainerController',
            controllerAs: 'appCtrl'
        });
})();