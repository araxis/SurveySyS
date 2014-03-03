var adminModule = angular.module('admin', ['ui.router', 'ui.bootstrap', 'breeze.angular', 'chieffancypants.loadingBar', 'ngAnimate']);

adminModule.config([
    '$stateProvider', 'cfpLoadingBarProvider', function ($stateProvider, cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
        $stateProvider.state('Admin', {
            url: "/admin",
            templateUrl: "../app/Admin/Views/Shell.html"
        }).state('Survay', {
            url: '/survey',
            templateUrl: '../app/Admin/Views/Survey.html'
        }).state('Questions', {
            url: '/questions',
            templateUrl: '../app/Admin/Views/Questions.html'
        }).state('AddQuestions', {
            url: '/question/add',
            templateUrl: '../app/Admin/Views/AddQuestion.html'
        }).state('Dashboard', {
            url: '/dashboard',
            templateUrl: '../app/Admin/Views/Dashboard.html'
        });
    }]);

adminModule.service('DbContext', App.Services.DbContext);
adminModule.service('DataService', Admin.Services.DataService);

adminModule.controller('ShellController', Admin.Controllers.ShellController);
adminModule.controller('QuestionsController', Admin.Controllers.QuestionsController);

adminModule.run([
    '$state', 'breeze', function ($state, breeze) {
        $state.go("Admin");
    }]);
//# sourceMappingURL=AdminModule.js.map
