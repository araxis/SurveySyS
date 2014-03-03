module Admin.Controllers {
    export interface IDashboardScope extends ng.IScope {
        viewModel: DashboardController;
    }

    export class DashboardController {
        static $inject = ['$scope'];

        public isCollapsed: boolean;

        constructor(private $scope: IDashboardScope) {

            this.isCollapsed = false;
            $scope.viewModel = this;

        }

    }


} 