(function () {
    'use strict';

    angular
        .module('ffapp')
        .controller('menuController', menuController);

    function menuController() {
        var vm = this;
        activate();

        function activate() { }

        vm.$onInit = function () {
        }

        vm.activateContact = function () {
            vm.mFlags.isOnContact = true;
            vm.mFlags.isOnHome = false;
        }

        /**
         * 
         * @param {String} optionClicked Determines where the user clicked so I can control the "dynamic body"
         */
        vm.avtivateNewPage = function (optionClicked) {
            setAllFlagsFalse();
            switch (optionClicked) {
                case "home":
                    vm.mFlags.isOnHome = true;
                    break;
                case "nutri":
                    vm.mFlags.isOnNutrition = true;
                    break;
                case "workout":
                    vm.mFlags.isOnWorkouts = true;
                    break;
                case "macros":
                    vm.mFlags.isOnMacrocalc = true;
                    break;
                case "faq":
                    vm.mFlags.isOnFAQ = true;
                    break;
                case "contact":
                    vm.mFlags.isOnContact = true;
                    break;
                case "interest":
                    vm.mFlags.isOnInterestingLinks = true;
                    break;
            }
        }

        function setAllFlagsFalse() {
            vm.mFlags.isOnHome = false;
            vm.mFlags.isOnNutrition = false;
            vm.mFlags.isOnWorkouts = false;
            vm.mFlags.isOnMacrocalc = false;
            vm.mFlags.isOnFAQ = false;
            vm.mFlags.isOnInterestingLinks = false;
            vm.mFlags.isOnContact = false;
        }
    }
})();
