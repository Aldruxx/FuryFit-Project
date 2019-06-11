(function () {
    'use strict';

    angular
        .module('ffapp')
        .controller('macrocalculatorController', macrocalculatorController);

    macrocalculatorController.$inject = ['furyFitMacroCalculatorService'];

    function macrocalculatorController(furyFitMacroCalculatorService) {
        var vm = this;
        activate();

        function activate() {
            vm.ageList = ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65'];
            vm.weightList = ['40', '42', '44', '46', '48', '50', '52', '54', '56', '58', '60', '62', '64', '66', '68', '70', '72', '74', '76', '78', '80', '82', '84', '86', '88', '90', '92', '94', '96', '98', '100', '102', '104', '106', '108', '110'];
            vm.heightList = ['150', '155', '160', '165', '170', '175', '180', '185', '190', '195', '200'];

            vm.errorsInMacrocalcInputs = false;
            vm.showGifLoading = false;
            vm.promiseResolved = false;
        }

        vm.calculateMacros = function () {
            checkAllInputs(vm.sexo, vm.edad, vm.peso, vm.altura, vm.objetivo, vm.activityIndex);
        }

        function checkAllInputs(sex, age, weight, height, objetive, activitat) {
            if (sex === null || age === null || weight === null || height === null || objetive === null || activitat === null) {
                vm.errorsInMacrocalcInputs = true;
            } else {
                vm.errorsInMacrocalcInputs = false;

                parseInt(vm.edad);
                parseFloat(vm.altura);
                parseFloat(vm.peso);

                vm.showGifLoading = true;

                vm.requestURL = 'http://localhost:8080/api/furyfitproject/macrocalculator/calculateusermacros/' + vm.sexo + '/' + vm.edad + '/' + vm.peso + '/' + vm.altura + '/' + vm.activityIndex + '/' + vm.objetivo;
                console.log(vm.requestURL);

                //Start the promise
                furyFitMacroCalculatorService.getMacrosFromAPI(vm.requestURL).then(paintResult, paintError);

                function paintResult(userMacros) {
                    vm.calculatedMacros = userMacros;
                    vm.showGifLoading = false;
                    vm.promiseResolved = true;
                }

                function paintError(err) {
                    console.log(err);
                }
            }
        }
    }
})();