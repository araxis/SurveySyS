var Admin;
(function (Admin) {
    (function (Controllers) {
        var DashboardController = (function () {
            function DashboardController($scope) {
                this.$scope = $scope;
                this.isCollapsed = false;
                $scope.viewModel = this;
            }
            DashboardController.$inject = ['$scope'];
            return DashboardController;
        })();
        Controllers.DashboardController = DashboardController;
    })(Admin.Controllers || (Admin.Controllers = {}));
    var Controllers = Admin.Controllers;
})(Admin || (Admin = {}));
//# sourceMappingURL=DashboardController.js.map
