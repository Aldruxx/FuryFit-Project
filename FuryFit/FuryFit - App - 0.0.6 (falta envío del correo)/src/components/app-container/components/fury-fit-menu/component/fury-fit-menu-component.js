(function () {
    'use strict';

    angular
        .module('ffapp')
        .component('ffMenu', {
            templateUrl: 'src/components/app-container/components/fury-fit-menu/assets/fury-fit-menu-template.html',
            controller: 'menuController',
            controllerAs: 'menuCtrl',
            bindings: {
                mFlags: '='
            }
        });
})();