module Admin.Controllers {
    export interface ISurveyScope extends ng.IScope {
        viewModel: SurveyController;
    }

    export class SurveyController {
        static $inject = ['$scope'];

        public isCollapsed: boolean;

        constructor(private $scope: ISurveyScope) {

            this.isCollapsed = false;
            $scope.viewModel = this;

        }

    }


} 