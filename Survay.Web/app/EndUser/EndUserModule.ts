/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />


var enduserModule = angular.module("EndUser", ['ui.router', 'ui.bootstrap', 'breezeDbContext']);


 enduserModule.config(['$stateProvider', ($stateProvider: ng.ui.IStateProvider) => {

     $stateProvider.state('Home', {
         url: "/home",
         templateUrl: "../app/EndUser/Views/Shell.html"
     });

 }]);
 //enduserModule.service('DbContext',  App.Services.DbContext);
 enduserModule.service('DataService', App.Services.DataService);
enduserModule.controller('ShellController', EndUser.Controllers.ShellController);




enduserModule.directive('appMultiselect', App.directives.MultiSelectDirective);

enduserModule.directive('appText', App.directives.TextQuestionDirective);

enduserModule.directive('appSingleselect', App.directives.SingleSelectQuestion);
enduserModule.directive('appPage', App.directives.PageDirective);
enduserModule.directive('appSurvey', App.directives.SurveyDirective);
enduserModule.directive('appWizard', App.directives.WizardDirective);
 enduserModule.directive('appDisplayfor', App.directives.QuestionDirectiveFactory);



enduserModule.run(['$state',($state: ng.ui.IStateService) => {

    $state.go("Home");

}]);

