(function () {
    'use strict';

    angular
        .module('ffapp')
        .controller('appContainerController', appContainerController);

    appContainerController.$inject = ['furyFitService'];

    function appContainerController(furyFitService) {
        var vm = this;
        activate();

        function activate() {
            vm.pageControlls = {
                isOnHome: true,
                isOnNutrition: false,
                isOnWorkouts: false,
                isOnMacrocalc: false,
                isOnInterestingLinks: false,
                isOnFAQ: false,
                isOnContact: false
            };

            furyFitService.getDietsFromDatabase().then(paintDietsOnPage, paintErrorOnPage);

            function paintDietsOnPage(response) {
                vm.dietsPackage = response;

                furyFitService.getWorkoutsFromDatabase().then(paintWorkoutsOnPage, paintError);

                function paintWorkoutsOnPage(resp) {
                    vm.workoutsPackage = resp;

                    furyFitService.getLinksFromDatabase().then(paintLinksOnPage, paintErrorOnLinkGetting);

                    function paintLinksOnPage(linksResponse) {
                        vm.linksPackage = linksResponse;

                        furyFitService.getFAQsFromDatabase().then(paintFAQsOnPage, paintErrorOnFaqGetting);

                        function paintFAQsOnPage(faqsresp) {
                            vm.faqsPackage = faqsresp;
                        }

                        function paintErrorOnFaqGetting(faqserr) { //KO in FAQs

                        }
                    }

                    function paintErrorOnLinkGetting() { //KO in links

                    }
                }

                function paintError(err) { //KO in workouts

                }
            }

            function paintErrorOnPage(error) { //KO in diets

            }
        }

    }
})();