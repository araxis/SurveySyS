var adminModule = angular.module('admin', ['ui.router', 'ui.bootstrap', 'ngEventAggregator', 'chieffancypants.loadingBar', 'ngAnimate', 'breeze.angular', 'breeze.directives', 'breezeDbContext']);

adminModule.config([
    '$stateProvider', 'cfpLoadingBarProvider', function ($stateProvider, cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;

        $stateProvider.state('Admin', { url: "/admin", templateUrl: "../app/Admin/Views/Shell.html" }).state('Survay', { url: '/survey', templateUrl: '../app/Admin/Views/Survey.html' }).state('QuestionCenter', {
            url: '/questionCenter', templateUrl: '../app/Admin/Views/Question/QuestionCenter.html'
        }).state('QuestionCenter.Home', {
            url: '',
            abstract: true,
            views: {
                'all@QuestionCenter': { templateUrl: '../app/Admin/Views/Question/AllQuestions.html' }
            }
        }).state('QuestionCenter.Home.All', {
            url: '/all',
            views: {}
        }).state('QuestionCenter.Home.CreateDescriptiveQuestion', {
            url: '/create/DescriptiveQuestion',
            views: {
                // 'all': { templateUrl: '../app/Admin/Views/Question/AllQuestions.html' },
                'details@QuestionCenter': { templateUrl: '../app/Admin/Views/Question/Create/CreateDescriptive.html' }
            }
        }).state('QuestionCenter.Home.CreateNumericQuestion', {
            url: '/create/numericquestion',
            views: {
                //'all': { templateUrl: '../app/Admin/Views/Question/AllQuestions.html' },
                'details@QuestionCenter': { templateUrl: '../app/Admin/Views/Question/Create/CreateNumeric.html' }
            }
        }).state('QuestionCenter.Home.CreateMultiChoiceQuestion', {
            url: '/create/numericquestion',
            views: {
                // 'all': {templateUrl: '../app/Admin/Views/Question/AllQuestions.html'},
                'details@QuestionCenter': { templateUrl: '../app/Admin/Views/Question/Create/CreateMultiChoice.html' }
            }
        }).state('QuestionCenter.Home.EditDescriptive', {
            url: '/edit/descriptive/:id',
            views: {
                //'all': { templateUrl: '../app/Admin/Views/Question/AllQuestions.html' },
                'details@QuestionCenter': { templateUrl: '../app/Admin/Views/Question/Edit/EditDescriptive.html' }
            }
        }).state('QuestionCenter.Home.EditNumeric', {
            url: '/edit/numeric/:id',
            views: {
                // 'all': { templateUrl: '../app/Admin/Views/Question/AllQuestions.html' },
                'details@QuestionCenter': { templateUrl: '../app/Admin/Views/Question/Edit/EditNumeric.html' }
            }
        }).state('QuestionCenter.Home.EditMultiChoice', {
            url: '/edit/multichoice/:id',
            views: {
                // 'all': { templateUrl: '../app/Admin/Views/Question/AllQuestions.html' },
                'details@QuestionCenter': { templateUrl: '../app/Admin/Views/Question/Edit/EditMultiChoice.html' }
            }
        });
    }]);

adminModule.run([
    '$state', 'breeze', '$window', 'DbContext', function ($state, breeze, $window, dbContext) {
        $window.onbeforeunload = function (ev) {
            var rr = dbContext.Manager.hasChanges();
            if (rr) {
                alert("UnSaved Data!!!!!");
                return false;
            }
            return false;
        };

        $state.go("Admin");
    }]);
//# sourceMappingURL=AdminModule.js.map
