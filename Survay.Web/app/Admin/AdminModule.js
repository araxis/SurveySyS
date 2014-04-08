//window.onbeforeunload  = check;
//function check() {
//    return "alooooooooooooooo?";
//    //or put whatever function you need to call when a user closes the web //browser.
//}
//import DescriptiveQuestionRules= Admin.BuRules.DescriptiveQuestion;
var adminModule = angular.module('admin', ['ui.router', 'ui.bootstrap', 'chieffancypants.loadingBar', 'ngAnimate', 'breezeDbContext']);

adminModule.config([
    '$stateProvider', 'cfpLoadingBarProvider', function ($stateProvider, cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;

        $stateProvider.state('Admin', { url: "/admin", templateUrl: "../app/Admin/Views/Shell.html" }).state('Survay', { url: '/survey', templateUrl: '../app/Admin/Views/Survey.html' }).state('QuestionCenter', { url: '/questionCenter', templateUrl: '../app/Admin/Views/Question/QuestionCenter.html' }).state('QuestionCenter.Create', { url: '/create', abstract: true, template: '<ui-view/>' }).state('QuestionCenter.Edit', { url: '/edit', abstract: true, template: '<ui-view/>' }).state('QuestionCenter.Edit.Descriptive', { url: '/descriptive/:id', templateUrl: '../app/Admin/Views/Question/Edit/EditDescriptive.html' }).state('QuestionCenter.Edit.Numeric', { url: '/numeric/:id', templateUrl: '../app/Admin/Views/Question/Edit/EditNumeric.html' }).state('QuestionCenter.Edit.MultiChoice', { url: '/multichoice/:id', templateUrl: '../app/Admin/Views/Question/Edit/EditMultiChoice.html' }).state('QuestionCenter.All', { url: '/all', templateUrl: '../app/Admin/Views/Question/AllQuestions.html' }).state('QuestionCenter.Create.DescriptiveQuestion', { url: '/descriptive', templateUrl: '../app/Admin/Views/Question/Create/CreateDescriptive.html' }).state('QuestionCenter.Create.NumericQuestion', { url: '/numeric', templateUrl: '../app/Admin/Views/Question/Create/CreateNumeric.html' }).state('QuestionCenter.Create.MultiChoiceQuestion', { url: '/multichoice', templateUrl: '../app/Admin/Views/Question/Create/CreateMultiChoice.html' }).state('AddQuestions', { url: '/question/add', templateUrl: '../app/Admin/Views/AddQuestion.html' }).state('Dashboard', { url: '/dashboard', templateUrl: '../app/Admin/Views/Dashboard.html' });
    }]);

//adminModule.service('DbContext', App.Services.DbContext);
//adminModule.service('DataService', Admin.Services.DataService);
//adminModule.service('QuestionDataService', Admin.Services.QuestionDataService);
//adminModule.controller('ShellController', Admin.Controllers.ShellController);
//adminModule.controller('AllQuestionsController', Admin.Controllers.Question.AllQuestionsController);
//adminModule.controller('QuestionCenterController', Admin.Controllers.QuestionCenterController);
//adminModule.controller('CreateDescriptiveController', Admin.Controllers.Question.Create.CreateDescriptiveController);
//adminModule.controller('CreateNumericController', Admin.Controllers.Question.Create.CreateNumericController);
//adminModule.controller('CreateMultiChoiceController', Admin.Controllers.Question.Create.CreateMultiChoiceController);
//adminModule.controller('EditDescriptiveController', Admin.Controllers.Question.Edit.EditDescriptiveController);
//adminModule.controller('EditNumericController', Admin.Controllers.Question.Edit.EditNumericController);
//adminModule.controller('EditMultiChoiceController', Admin.Controllers.Question.Edit.EditMultiChoiceController);
//adminModule.directive('descriptiveQuestioncreator', Admin.directives.DescriptiveQuestionCreator);
//adminModule.directive('numericQuestionCreator', Admin.directives.NumericQuestionCreator);
//adminModule.directive('numericQuestionEditor', Admin.directives.NumericQuestionEditor);
//adminModule.directive('descriptiveQuestionEditor', Admin.directives.DescriptiveQuestionEditor);
//adminModule.directive('multiChoiceQuestionEditor', Admin.directives.MultiChoiceQuestionEditor);
//adminModule.directive('multiChoiceQuestionCreator', Admin.directives.MultiChoiceQuestionCreator);
//adminModule.directive('questionCreatorFactory', Admin.directives.QuestionCreatorFactory);
//adminModule.run(['$state', 'breeze', '$window', 'DbContext', ($state: ng.ui.IStateService, breeze, $window: ng.IWindowService, dbContext:IUnitofWork) => {
//    $window.onbeforeunload = (ev)=> {
//        var rr = dbContext.Manager.hasChanges();
//        if (rr) {
//            alert("UnSaved Data!!!!!");
//            return false;
//        }
//        return true;
//    };
//    $state.go("Admin");
//}]);
adminModule.run([
    '$state', 'breeze', '$window', function ($state, breeze, $window) {
        //$window.onbeforeunload = (ev) => {
        //    var rr = dbContext.Manager.hasChanges();
        //    if (rr) {
        //        alert("UnSaved Data!!!!!");
        //        return false;
        //    }
        //    return true;
        //};
        $state.go("Admin");
    }]);
//# sourceMappingURL=AdminModule.js.map
