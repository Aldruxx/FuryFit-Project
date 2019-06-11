(function () {
    'use strict';

    angular
        .module('ffapp')
        .controller('dynamicBodyController', dynamicBodyController);

    function dynamicBodyController() {
        var vm = this;
        activate();

        function activate() { }

    }
})();