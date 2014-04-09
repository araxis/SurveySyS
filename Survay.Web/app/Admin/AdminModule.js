var adminModule = angular.module('admin', ['ui.router', 'ui.bootstrap', 'chieffancypants.loadingBar', 'ngAnimate', 'breeze.angular', 'breeze.directives', 'breezeDbContext']);

adminModule.config([
    '$stateProvider', 'cfpLoadingBarProvider', function ($stateProvider, cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;

        $stateProvider.state('Admin', { url: "/admin", templateUrl: "../app/Admin/Views/Shell.html" }).state('Survay', { url: '/survey', templateUrl: '../app/Admin/Views/Survey.html' }).state('QuestionCenter', { url: '/questionCenter', templateUrl: '../app/Admin/Views/Question/QuestionCenter.html' }).state('QuestionCenter.Create', { url: '/create', abstract: true, template: '<ui-view/>' }).state('QuestionCenter.Edit', { url: '/edit', abstract: true, template: '<ui-view/>' }).state('QuestionCenter.Edit.Descriptive', { url: '/descriptive/:id', templateUrl: '../app/Admin/Views/Question/Edit/EditDescriptive.html' }).state('QuestionCenter.Edit.Numeric', { url: '/numeric/:id', templateUrl: '../app/Admin/Views/Question/Edit/EditNumeric.html' }).state('QuestionCenter.Edit.MultiChoice', { url: '/multichoice/:id', templateUrl: '../app/Admin/Views/Question/Edit/EditMultiChoice.html' }).state('QuestionCenter.All', { url: '/all', templateUrl: '../app/Admin/Views/Question/AllQuestions.html' }).state('QuestionCenter.Create.DescriptiveQuestion', { url: '/descriptive', templateUrl: '../app/Admin/Views/Question/Create/CreateDescriptive.html' }).state('QuestionCenter.Create.NumericQuestion', { url: '/numeric', templateUrl: '../app/Admin/Views/Question/Create/CreateNumeric.html' }).state('QuestionCenter.Create.MultiChoiceQuestion', { url: '/multichoice', templateUrl: '../app/Admin/Views/Question/Create/CreateMultiChoice.html' }).state('AddQuestions', { url: '/question/add', templateUrl: '../app/Admin/Views/AddQuestion.html' }).state('Dashboard', { url: '/dashboard', templateUrl: '../app/Admin/Views/Dashboard.html' });
    }]);

adminModule.run([
    '$state', 'breeze', '$window', 'DbContext', function ($state, breeze, $window, dbContext) {
        $window.onbeforeunload = function (ev) {
            var rr = dbContext.Manager.hasChanges();
            if (rr) {
                alert("UnSaved Data!!!!!");
                return false;
            }
            return true;
        };

        $state.go("Admin");
    }]);
//# sourceMappingURL=AdminModule.js.map
