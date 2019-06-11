(function () {
    'use strict';

    angular
        .module('ffapp')
        .controller('homePageController', homePageController);

    function homePageController() {
        var vm = this;
        activate();

        function activate() { }

        vm.goToMacros = function() {
            vm.flagList.isOnHome = false;
            vm.flagList.isOnMacrocalc = true;
        }
    }
})();