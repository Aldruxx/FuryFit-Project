(function () {
    'use strict';

    angular
        .module('ffapp')
        .service('ModalService', ModalService);

    ModalService.inject = ['$uibModal', '$uibModalStack'];
    function ModalService($uibModal, $uibModalStack) {
        var self = this;

        self.showGenericError = showGenericError;

        function showGenericError(errorObject, isModalBlocked, template) {
            var modalErrorObject = {
                animation: false,
                templateUrl: template,
                controller: 'GenericErrorModalController',
                controllerAs: 'modalCtrl',
                resolve: {
                    errorObject: function () {
                        return errorObject;
                    }
                }
            };

            if (isModalBlocked) {
                modalErrorObject['backdrop'] = 'static';
                modalErrorObject['keyboard'] = false;
            }
            return $uibModal.open(modalErrorObject);
        }
    }
})();