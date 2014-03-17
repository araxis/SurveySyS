//window.onbeforeunload  = check;
//function check() {
//    return "alooooooooooooooo?";
   
//    //or put whatever function you need to call when a user closes the web //browser.
//}



var adminModule = angular.module('admin', ['ui.router', 'ui.bootstrap', 'breeze.angular', 'chieffancypants.loadingBar', 'ngAnimate']);

adminModule.config(['$stateProvider','cfpLoadingBarProvider', ($stateProvider: ng.ui.IStateProvider, cfpLoadingBarProvider) => {
    cfpLoadingBarProvider.includeSpinner = false;
    $stateProvider.state('Admin', {
        url: "/admin",
        templateUrl: "../app/Admin/Views/Shell.html"
    }).state('Survay', {
        url: '/survey',
        templateUrl:'../app/Admin/Views/Survey.html'
        
    }).state('Questions', {
            url: '/question/all',
        templateUrl: '../app/Admin/Views/Question/All.html'

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
adminModule.directive('descriptiveQuestioncreator', Admin.directives.DescriptiveQuestionCreator);
adminModule.directive('numericQuestionCreator', Admin.directives.NumericQuestionCreator);

adminModule.directive('numericQuestionEditor', Admin.directives.NumericQuestionEditor);
adminModule.directive('descriptiveQuestionEditor', Admin.directives.DescriptiveQuestionEditor);
adminModule.directive('multiChoiceQuestionEditor', Admin.directives.MultiChoiceQuestionEditor);

adminModule.directive('multiChoiceQuestionCreator', Admin.directives.MultiChoiceQuestionCreator);
adminModule.directive('questionCreatorFactory', Admin.directives.QuestionCreatorFactory);
adminModule.run(['$state', 'breeze', '$window', 'DbContext', ($state: ng.ui.IStateService, breeze, $window: ng.IWindowService, dbContext:IUnitofWork) => {

    $window.onbeforeunload = (ev) => {
        var rr = dbContext.Manager.hasChanges();
        if (rr) {
            alert("UnSaved Data!!!!!");
            return false;
        }
       
    }

    $state.go("Admin");

}]);