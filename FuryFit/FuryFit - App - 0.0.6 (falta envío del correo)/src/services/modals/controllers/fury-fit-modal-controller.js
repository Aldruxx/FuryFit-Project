(function () {
    'use strict';

    angular
        .module('ffapp')
        .controller('GenericErrorModalController', GenericErrorModalController);

    GenericErrorModalController.inject = ['$uibModalInstance', 'errorObject'];

    function GenericErrorModalController($uibModalInstance, errorObject) {
        var vm = this;
        vm.model = errorObject;

        activate();

        vm.close = closeErrorModal;
        vm.accept = acceptErrorModal;

        function activate() {
            DatalayerUtilsService.sendDatalayerErrorEvent(vm.model);
            $uibModalInstance.result.then(DatalayerUtilsService.removeDatalayerErrorAttrs, DatalayerUtilsService.removeDatalayerErrorAttrs);
        };

        function closeErrorModal() {
            $uibModalInstance.dismiss();
        }
        
        function acceptErrorModal() {
            $uibModalInstance.close();
        }
    }
})();